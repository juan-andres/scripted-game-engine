// TODO Implement
function createLightsFromData(data) {
  var ambientLight = new THREE.AmbientLight( 0xcccccc, 1 );
  return [ambientLight];
}

// TODO Implement
function createSyncModelsFromData(data) {
  return [];
}

function _loadModel(modelData, materials, onLoad) {
  const objLoader = new THREE.OBJLoader();

  if (materials) objLoader.setMaterials(materials);

  objLoader.setPath(modelData.path);
  objLoader.load(modelData.objFileName, model => {
    if (modelData.id) {
      model._id = modelData.id;
    }
    if (modelData.position) {
      model.position.set(...modelData.position);
    }
    if (modelData.scale) {
      model.scale.set(...modelData.scale);
    }
    if (modelData.rotation) {
      model.rotation.set(...modelData.rotation);
    }

    if (modelData.animation) {
      model._animation = modelData.animation;
    }

    onLoad(model);
  });
}

function createAsyncModelsFromData(modelsData, onLoad){
  modelsData.forEach(modelData => {
    if (!modelData.mtlFileName) {
      _loadModel(modelData, null, onLoad);
      return;
    }
    const mtlLoader = new THREE.MTLLoader();
  	mtlLoader.setPath(modelData.path);
  	mtlLoader.load(modelData.mtlFileName, materials => {
  		materials.preload();
      _loadModel(modelData, materials, onLoad);
  	});
  });
}

// https://gist.github.com/addyosmani/5434533
function limitLoop (fn, fps) {
  // Use var then = Date.now(); if you
  // don't care about targetting < IE9
  var then = new Date().getTime();

  // custom fps, otherwise fallback to 60
  fps = fps || 60;
  var interval = 1000 / fps;

  return (function loop(time){
    requestAnimationFrame(loop);

    // again, Date.now() if it's available
    var now = new Date().getTime();
    var delta = now - then;

    if (delta > interval) {
      // Update time
      // now - (delta % interval) is an improvement over just
      // using then = now, which can end up lowering overall fps
      then = now - (delta % interval);

      // call the fn
      fn(now - then);
}
  }(0));
};

function Engine(canvas, onUpdate) {
  this.camera = new THREE.PerspectiveCamera(45, canvas.innerWidth / canvas.innerHeight, 1, 2000);
  this.scene = new THREE.Scene();
  this.renderer = new THREE.WebGLRenderer({canvas: canvas});
  this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  this.onUpdate = onUpdate;
  this.delta = 1;

  this.addToScene = (m) => this.scene.add(m);

  this.setSceneFromData = (data) => {
    const lights = createLightsFromData(data.lights);
    lights.map(this.addToScene);

    const syncModels = createSyncModelsFromData(data.syncModels);
    syncModels.map(this.addToScene);

    if (data.asyncModels) createAsyncModelsFromData(data.asyncModels, this.addToScene);
  }

  this._setControls = () => {
    this.controls.enableDamping = true;
    this.controls.dampingFactor =  0.25;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.enableKeys = false;
  }

  this.resize = () => {
    const width = this.renderer.domElement.innerWidth;
    const height = this.renderer.domElement.innerHeight;
    console.log(width, height);

    this.camera.aspect =  width/height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  this.init = (data) => {
    this.renderer.setClearColor(0x444444);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.setSceneFromData(data);

    this._setControls();

    this.resize();

    return this;
  }

  this.update = (delta) => {
    this.delta = delta;
    if (this.onUpdate) this.onUpdate(this.scene, this.camera);

    this.scene.children.forEach(model => {
      if (model._animation) {
        model._animation(model, this.camera, delta);
      }
    })

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  this.animate = () => {
    limitLoop(this.update);
  }
}

export {
  Engine,
};

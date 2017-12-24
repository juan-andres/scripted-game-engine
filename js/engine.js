// TODO Implement
function createLightsFromData(data) {
  return [];
}

// TODO Implement
function createSyncModelsFromData(data) {
  return [];
}

// TODO Implement
function createAsyncModelsFromData(data, onLoad){
}

function Engine(canvas, onUpdate) {
  this.camera = new THREE.PerspectiveCamera(45, canvas.innerWidth / canvas.innerHeight, 1, 2000);
  this.scene = new THREE.Scene();
  this.renderer = new THREE.WebGLRenderer({canvas: canvas});
  this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  this.onUpdate = onUpdate;

  this.addToScene = (m) => this.scene.add(m);

  this.setSceneFromData = (data) => {
    const lights = createLightsFromData(data.lights);
    lights.map(this.addToScene);

    const syncModels = createSyncModelsFromData(data.syncModels);
    syncModels.map(this.addToScene);

    createAsyncModelsFromData(data.asyncModels, this.addToScene);
  }

  this._setControls = () => {
    this.controls.enableDamping = true;
    this.controls.dampingFactor =  0.25;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.enableKeys = false;
  }

  this.init = (data) => {
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.resize();

    this.setSceneFromData(data);

    this._setControls();

    return this;
  }

  this.resize = () => {
    const width = this.renderer.domElement.innerWidth;
    const height = this.renderer.domElement.innerHeight
    this.camera.aspect =  width/height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  this.update = () => {
    if (this.onUpdate) this.onUpdate();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  this.animate = () => {
    requestAnimationFrame(this.animate);
    this.update();
  }
}

export {
  Engine,
};

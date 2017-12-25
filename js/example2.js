import {screenToWorld} from './intersectionUtils'
import {Engine} from './engine';
import './lodash';

function resize(e) {
  $canvas.innerWidth = e.target.innerWidth;
  $canvas.innerHeight = e.target.innerHeight;
  engine.resize();
}

function hoverOnMouseMove(e) {
  engine.scene.children.forEach(child => {
    updateMaterial(child, .5);
  });
  const intersections = screenToWorld(e.offsetX, e.offsetY, $canvas.innerWidth, $canvas.innerHeight, engine.scene.children, engine.camera);

  if (intersections[0]) {
    const hovered = intersections[0].object.parent;
    updateMaterial(hovered, 1);
    $title.innerHTML = `Click to select ${hovered._id}`
  } else {
    $title.innerHTML = 'Select one';
  }
}

function playOnClick(e) {
  const intersections = screenToWorld(e.offsetX, e.offsetY, $canvas.innerWidth, $canvas.innerHeight, engine.scene.children, engine.camera);

  if (intersections[0]) {
    $canvas.removeEventListener('click', playOnClick);
    $canvas.removeEventListener('mousemove', hoverOnMouseMove);
    const selection = intersections[0].object.parent;
    const computerChoiceId = ['rock', 'paper', 'scissors'][Math.random()*3|0];

    let computerChoice = _.filter(engine.scene.children, child => child._id === computerChoiceId)[0];

    let backupColorsDict = backupMaterials([selection, computerChoice]);
    if (selection === computerChoice) {
      updateMaterial(selection, 1, new THREE.Color('yellow'));
    } else {
      updateMaterial(selection, 1, new THREE.Color('blue'));
      updateMaterial(computerChoice, 1, new THREE.Color('purple'));
    }

    const result = rpsResolver(selection._id, computerChoiceId);

    if (result === 'win') {
      $title.innerHTML = `${selection._id} beats ${computerChoice._id}, you win ✅`;
    } else if (result === 'lose') {
      $title.innerHTML = `${computerChoice._id} beats ${selection._id}, you lose ❌`;
    } else {
      $title.innerHTML = `You both chose ${selection._id}, it is a tie 👻`;
    }

    setTimeout(function resetGame() {
      updateColorsFromDict(selection, backupColorsDict);
      updateColorsFromDict(computerChoice, backupColorsDict);
      $title.innerHTML = 'Choose again';
      $canvas.addEventListener('click', playOnClick, false);
      $canvas.addEventListener('mousemove', hoverOnMouseMove, false);
    }, 3000);
  }
}

function updateColorsFromDict(model, dict) {
  model.children.forEach(mesh => {
    if (_.isArray(mesh.material)) {
      mesh.material.forEach(m => {
        m.color = dict[m.id];
      });
    } else {
      mesh.material.color = dict[mesh.material.id];
    }
  });
}

function backupMaterials(list) {
  const dict = {};
  list.forEach(item => {
    item.children.forEach(mesh => {
      if (_.isArray(mesh.material)) {
        mesh.material.forEach(m => {
          dict[m.id] = m.color.clone();
        });
      } else {
        dict[mesh.material.id] = mesh.material.color.clone();
      }
    });
  });
  return dict;
}

function rpsResolver(p1, p2) {
    return p1 === p2 ? 'tie' : (p1 === 'rock' ? (p2 == 'paper' ? 'lose' : 'win') : (p1 === 'paper' ? (p2 === 'scissors' ? 'lose': 'win') : (p2 === 'rock' ? 'lose' : 'win')));
}

function updateMaterial(group, opacity, color) {
  if (group.type != 'Group') return [];
  group.children.forEach(mesh => {
    if (_.isArray(mesh.material)) {
        mesh.material.forEach(material => {
          material.transparent = true;
          material.opacity = opacity;
          if (color) material.color = color;
        })
    } else {
        mesh.material.transparent = true;
        mesh.material.opacity = opacity;
        if (color) mesh.material.color = color;
    }
  });
}

const $title = document.getElementById("result");
const $canvas = document.getElementById("example2_canvas");
$canvas.innerWidth = window.innerWidth;
$canvas.innerHeight = window.innerHeight;

const engine = new Engine($canvas, () => {});
engine.camera.position.y = 10;
engine.camera.position.z = -5;

engine.init({
  asyncModels: [
    {
      id: 'rock',
      path: '../assets/rock/',
      mtlFileName: 'Rock1.mtl',
      objFileName: 'Rock1.obj',
      position: [4, 0, 0],
      animation: function(model, camera, delta) {
          model.rotation.y += delta/1000;
          model.rotation.z += delta/1000;
      }
    },
    {
      id: 'paper',
      path: '../assets/paper/',
      objFileName: 'paper_airplane.obj',
      position: [0, 0, 0],
      scale: [40, 40, 40],
      animation: function(model, camera, delta) {
          model.rotation.y -= delta/1000;
      }
    },
    {
      id: 'scissors',
      path: '../assets/scissors/',
      mtlFileName: 'scissors.mtl',
      objFileName: 'scissors.obj',
      position: [-3, 0, 0],
      scale: [.6, .6, .6],
      rotation: [0, 0, 0],
      animation: function(model, camera, delta) {
          model.rotation.z += delta/1000;
      }
    },
  ]
}).animate();

$canvas.addEventListener('click', playOnClick, false);
$canvas.addEventListener('mousemove', hoverOnMouseMove, false);
window.addEventListener('resize', resize, false);

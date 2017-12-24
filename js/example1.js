import {Engine} from './engine';

function normalize(start, end, origStart, origEnd, value) {
  return (end - start) * ((value - origEnd) / (origEnd - origStart)) + end;
}

function screenPositionToRGB(width, height, screenX, screenY) {
  const x = normalize(0, 255, 0, width, screenX) | 0;
  const y = normalize(0, 255, 0, height, screenY) | 0;
  const h = Math.pow(screenX - width/2, 2) + Math.pow(screenY - height/2, 2);
  const diagonal = Math.pow(width, 2) + Math.pow(height, 2);
  const z = normalize(0, 255, diagonal, 0, h) | 0;
  return [x, y, z];
}

function updateBackground(e) {
  const color = screenPositionToRGB(e.target.clientWidth, e.target.clientHeight, e.x, e.y);
  engine.scene.background = new THREE.Color(`rgb(${color.join(',')})`);
}

function resize(e) {
  $canvas.innerWidth = e.target.innerWidth;
  $canvas.innerHeight = e.target.innerHeight;
  engine.resize();
}

const $canvas = document.getElementById("example1_canvas");

const engine = new Engine($canvas, () => {});
engine.init({}).animate();

$canvas.addEventListener('mousemove', updateBackground, false);
window.addEventListener('resize', resize, false);

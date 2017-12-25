const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function screenToWorld(screenX, screenY, width, height, objects, camera) {
  mouse.x = (screenX / width) * 2 - 1;
	mouse.y = - (screenY / height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  return raycaster.intersectObjects(objects, true);
}

export {
  screenToWorld,
}

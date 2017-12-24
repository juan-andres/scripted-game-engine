/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(1);\n\n\nfunction normalize(start, end, origStart, origEnd, value) {\n  return (end - start) * ((value - origEnd) / (origEnd - origStart)) + end;\n}\n\nfunction screenPositionToRGB(width, height, screenX, screenY) {\n  const x = normalize(0, 255, 0, width, screenX) | 0;\n  const y = normalize(0, 255, 0, height, screenY) | 0;\n  const h = Math.pow(screenX - width/2, 2) + Math.pow(screenY - height/2, 2);\n  const diagonal = Math.pow(width, 2) + Math.pow(height, 2);\n  const z = normalize(0, 255, diagonal, 0, h) | 0;\n  return [x, y, z];\n}\n\nfunction updateBackground(e) {\n  const color = screenPositionToRGB(e.target.clientWidth, e.target.clientHeight, e.x, e.y);\n  engine.scene.background = new THREE.Color(`rgb(${color.join(',')})`);\n}\n\nfunction resize(e) {\n  $canvas.innerWidth = e.target.innerWidth;\n  $canvas.innerHeight = e.target.innerHeight;\n  engine.resize();\n}\n\nconst $canvas = document.getElementById(\"example1_canvas\");\n\nconst engine = new __WEBPACK_IMPORTED_MODULE_0__engine__[\"a\" /* Engine */]($canvas, () => {});\nengine.init({}).animate();\n\n$canvas.addEventListener('mousemove', updateBackground, false);\nwindow.addEventListener('resize', resize, false);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9leGFtcGxlMS5qcz9lYmNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxnQkFBZ0I7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0RkFBMkM7QUFDM0MsY0FBYzs7QUFFZDtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VuZ2luZX0gZnJvbSAnLi9lbmdpbmUnO1xuXG5mdW5jdGlvbiBub3JtYWxpemUoc3RhcnQsIGVuZCwgb3JpZ1N0YXJ0LCBvcmlnRW5kLCB2YWx1ZSkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAqICgodmFsdWUgLSBvcmlnRW5kKSAvIChvcmlnRW5kIC0gb3JpZ1N0YXJ0KSkgKyBlbmQ7XG59XG5cbmZ1bmN0aW9uIHNjcmVlblBvc2l0aW9uVG9SR0Iod2lkdGgsIGhlaWdodCwgc2NyZWVuWCwgc2NyZWVuWSkge1xuICBjb25zdCB4ID0gbm9ybWFsaXplKDAsIDI1NSwgMCwgd2lkdGgsIHNjcmVlblgpIHwgMDtcbiAgY29uc3QgeSA9IG5vcm1hbGl6ZSgwLCAyNTUsIDAsIGhlaWdodCwgc2NyZWVuWSkgfCAwO1xuICBjb25zdCBoID0gTWF0aC5wb3coc2NyZWVuWCAtIHdpZHRoLzIsIDIpICsgTWF0aC5wb3coc2NyZWVuWSAtIGhlaWdodC8yLCAyKTtcbiAgY29uc3QgZGlhZ29uYWwgPSBNYXRoLnBvdyh3aWR0aCwgMikgKyBNYXRoLnBvdyhoZWlnaHQsIDIpO1xuICBjb25zdCB6ID0gbm9ybWFsaXplKDAsIDI1NSwgZGlhZ29uYWwsIDAsIGgpIHwgMDtcbiAgcmV0dXJuIFt4LCB5LCB6XTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFja2dyb3VuZChlKSB7XG4gIGNvbnN0IGNvbG9yID0gc2NyZWVuUG9zaXRpb25Ub1JHQihlLnRhcmdldC5jbGllbnRXaWR0aCwgZS50YXJnZXQuY2xpZW50SGVpZ2h0LCBlLngsIGUueSk7XG4gIGVuZ2luZS5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKGByZ2IoJHtjb2xvci5qb2luKCcsJyl9KWApO1xufVxuXG5mdW5jdGlvbiByZXNpemUoZSkge1xuICAkY2FudmFzLmlubmVyV2lkdGggPSBlLnRhcmdldC5pbm5lcldpZHRoO1xuICAkY2FudmFzLmlubmVySGVpZ2h0ID0gZS50YXJnZXQuaW5uZXJIZWlnaHQ7XG4gIGVuZ2luZS5yZXNpemUoKTtcbn1cblxuY29uc3QgJGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZTFfY2FudmFzXCIpO1xuXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKCRjYW52YXMsICgpID0+IHt9KTtcbmVuZ2luZS5pbml0KHt9KS5hbmltYXRlKCk7XG5cbiRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdXBkYXRlQmFja2dyb3VuZCwgZmFsc2UpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSwgZmFsc2UpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9leGFtcGxlMS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Engine; });\n// TODO Implement\nfunction createLightsFromData(data) {\n  return [];\n}\n\n// TODO Implement\nfunction createSyncModelsFromData(data) {\n  return [];\n}\n\n// TODO Implement\nfunction createAsyncModelsFromData(data, onLoad){\n}\n\nfunction Engine(canvas, onUpdate) {\n  this.camera = new THREE.PerspectiveCamera(45, canvas.innerWidth / canvas.innerHeight, 1, 2000);\n  this.scene = new THREE.Scene();\n  this.renderer = new THREE.WebGLRenderer({canvas: canvas});\n  this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);\n  this.onUpdate = onUpdate;\n\n  this.addToScene = (m) => this.scene.add(m);\n\n  this.setSceneFromData = (data) => {\n    const lights = createLightsFromData(data.lights);\n    lights.map(this.addToScene);\n\n    const syncModels = createSyncModelsFromData(data.syncModels);\n    syncModels.map(this.addToScene);\n\n    createAsyncModelsFromData(data.asyncModels, this.addToScene);\n  }\n\n  this._setControls = () => {\n    this.controls.enableDamping = true;\n    this.controls.dampingFactor =  0.25;\n    this.controls.enableZoom = true;\n    this.controls.enablePan = false;\n    this.controls.enableKeys = false;\n  }\n\n  this.init = (data) => {\n    this.renderer.setPixelRatio(window.devicePixelRatio);\n    this.resize();\n\n    this.setSceneFromData(data);\n\n    this._setControls();\n\n    return this;\n  }\n\n  this.resize = () => {\n    const width = this.renderer.domElement.innerWidth;\n    const height = this.renderer.domElement.innerHeight\n    this.camera.aspect =  width/height;\n    this.camera.updateProjectionMatrix();\n    this.renderer.setSize(width, height);\n  }\n\n  this.update = () => {\n    if (this.onUpdate) this.onUpdate();\n    this.controls.update();\n    this.renderer.render(this.scene, this.camera);\n  }\n\n  this.animate = () => {\n    requestAnimationFrame(this.animate);\n    this.update();\n  }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9lbmdpbmUuanM/NzRkYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZUFBZTtBQUMxRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPIEltcGxlbWVudFxuZnVuY3Rpb24gY3JlYXRlTGlnaHRzRnJvbURhdGEoZGF0YSkge1xuICByZXR1cm4gW107XG59XG5cbi8vIFRPRE8gSW1wbGVtZW50XG5mdW5jdGlvbiBjcmVhdGVTeW5jTW9kZWxzRnJvbURhdGEoZGF0YSkge1xuICByZXR1cm4gW107XG59XG5cbi8vIFRPRE8gSW1wbGVtZW50XG5mdW5jdGlvbiBjcmVhdGVBc3luY01vZGVsc0Zyb21EYXRhKGRhdGEsIG9uTG9hZCl7XG59XG5cbmZ1bmN0aW9uIEVuZ2luZShjYW52YXMsIG9uVXBkYXRlKSB7XG4gIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCBjYW52YXMuaW5uZXJXaWR0aCAvIGNhbnZhcy5pbm5lckhlaWdodCwgMSwgMjAwMCk7XG4gIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtjYW52YXM6IGNhbnZhc30pO1xuICB0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gIHRoaXMub25VcGRhdGUgPSBvblVwZGF0ZTtcblxuICB0aGlzLmFkZFRvU2NlbmUgPSAobSkgPT4gdGhpcy5zY2VuZS5hZGQobSk7XG5cbiAgdGhpcy5zZXRTY2VuZUZyb21EYXRhID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBsaWdodHMgPSBjcmVhdGVMaWdodHNGcm9tRGF0YShkYXRhLmxpZ2h0cyk7XG4gICAgbGlnaHRzLm1hcCh0aGlzLmFkZFRvU2NlbmUpO1xuXG4gICAgY29uc3Qgc3luY01vZGVscyA9IGNyZWF0ZVN5bmNNb2RlbHNGcm9tRGF0YShkYXRhLnN5bmNNb2RlbHMpO1xuICAgIHN5bmNNb2RlbHMubWFwKHRoaXMuYWRkVG9TY2VuZSk7XG5cbiAgICBjcmVhdGVBc3luY01vZGVsc0Zyb21EYXRhKGRhdGEuYXN5bmNNb2RlbHMsIHRoaXMuYWRkVG9TY2VuZSk7XG4gIH1cblxuICB0aGlzLl9zZXRDb250cm9scyA9ICgpID0+IHtcbiAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZURhbXBpbmcgPSB0cnVlO1xuICAgIHRoaXMuY29udHJvbHMuZGFtcGluZ0ZhY3RvciA9ICAwLjI1O1xuICAgIHRoaXMuY29udHJvbHMuZW5hYmxlWm9vbSA9IHRydWU7XG4gICAgdGhpcy5jb250cm9scy5lbmFibGVQYW4gPSBmYWxzZTtcbiAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZUtleXMgPSBmYWxzZTtcbiAgfVxuXG4gIHRoaXMuaW5pdCA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy5zZXRTY2VuZUZyb21EYXRhKGRhdGEpO1xuXG4gICAgdGhpcy5fc2V0Q29udHJvbHMoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGhpcy5yZXNpemUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHRcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSAgd2lkdGgvaGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5vblVwZGF0ZSkgdGhpcy5vblVwZGF0ZSgpO1xuICAgIHRoaXMuY29udHJvbHMudXBkYXRlKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgdGhpcy5hbmltYXRlID0gKCkgPT4ge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgRW5naW5lLFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvZW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
import * as THREE from "three";

console.log(THREE);

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Sizes
const cameraSize = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  cameraSize.width / cameraSize.height
);
camera.position.z = 3;
scene.add(camera);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// ...

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(cameraSize.width, cameraSize.height);
renderer.render(scene, camera);

import { PerspectiveCamera } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100, // far clipping plane
  );

  let metersPerSecond = 20
  let directionMultiplier = 1
  let i = 0

  camera.tick = (delta) => {
    i += metersPerSecond * delta * directionMultiplier
    camera.position.z += metersPerSecond * delta * directionMultiplier

    if (i > 10) {
      directionMultiplier = -1
    } else if (i < -5) {
      directionMultiplier = 1
    }
  }

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };

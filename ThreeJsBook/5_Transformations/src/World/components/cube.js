import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
} from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createCube(color, position) {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = new MeshBasicMaterial({ color: color });

  const cube = new Mesh(geometry, material);

  cube.position.x = position.x
  cube.position.y = position.y
  cube.position.z = position.z

  // equivalent to:
  // cube.position.set(-0.5, -0.1, 1);

  cube.scale.x = .1
  cube.scale.y = .1
  cube.scale.z = .02

  // equivalent to:
  // cube.scale.set(1.25, 0.25, 0.5);

  // to rotate using degrees, they must
  // first be converted to radians
  
  // cube.rotation.x = MathUtils.degToRad(-2);
  // cube.rotation.y = MathUtils.degToRad(-2);
  // cube.rotation.z = MathUtils.degToRad(6);

  return cube;
}

export { createCube };

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

  const xScaleOffset = Math.random() * .02
  const yScaleOffset = Math.random() * .02
  const zScaleOffset = Math.random() * .02

  cube.scale.x = .1 + xScaleOffset
  cube.scale.y = .1 + yScaleOffset
  cube.scale.z = .02 + zScaleOffset

  // equivalent to:
  // cube.scale.set(1.25, 0.25, 0.5);

  // to rotate using degrees, they must
  // first be converted to radians
  

  const randX = Math.random() * 360
  const randY = Math.random() * 360
  const randZ = Math.random() * 360
  cube.rotation.x = MathUtils.degToRad(randX);
  cube.rotation.y = MathUtils.degToRad(randY);
  cube.rotation.z = MathUtils.degToRad(randZ);

  return cube;
}

export { createCube };

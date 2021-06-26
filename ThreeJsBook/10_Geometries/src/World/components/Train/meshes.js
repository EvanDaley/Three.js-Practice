import { Mesh } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  const cabin = new Mesh(geometries.cabin, materials.body);
  cabin.position.set(1.5, 2.5, 0);
  cabin.scale.set(1, 0.25, 1);

  const cabinTop = new Mesh(geometries.cabin, materials.body);
  cabinTop.position.set(1.5, 1.1, 0);
  cabinTop.scale.set(1, .65, 1);

  const chimney = new Mesh(geometries.chimney, materials.detail);
  chimney.position.set(-2, 1.9, 0);

  const nose = new Mesh(geometries.nose, materials.body);
  nose.position.set(-1, 1, 0);
  nose.rotation.z = Math.PI / 2;

  const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
  smallWheelRear.position.y = 0.5;
  smallWheelRear.rotation.x = Math.PI / 2;

  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1;

  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2;

  const bigWheel = smallWheelRear.clone();
  bigWheel.position.set(1.5, 0.9, 0);
  bigWheel.scale.set(2, 1.25, 2);

  return {
    nose,
    cabin,
    chimney,
    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    cabinTop,
    bigWheel,
  };
}

export { createMeshes };
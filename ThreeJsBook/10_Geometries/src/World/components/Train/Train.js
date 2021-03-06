import { Group, MathUtils } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

import { createMeshes } from './meshes.js';

const wheelSpeed = MathUtils.degToRad(24);

class Train extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    console.log(this.meshes)

    this.add(
        this.meshes.nose,
        this.meshes.cabin,
        this.meshes.chimney,
        this.meshes.smallWheelRear,
        this.meshes.smallWheelCenter,
        this.meshes.smallWheelFront,
        this.meshes.cabinTop,
        this.meshes.bigWheel,
      );
  }

  tick(delta) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
  }
}

export { Train }
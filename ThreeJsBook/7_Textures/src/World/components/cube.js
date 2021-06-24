import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createMaterial() {
  // create a "standard" material
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    '/assets/textures/stepbrothers.png',
    // '/assets/textures/uv-test-col.png',
  );

  const material = new MeshStandardMaterial({
    map: texture
  });

  return material;
}

function createCube() {
  const geometry = new BoxBufferGeometry(8,8,8);
  // const material = new MeshStandardMaterial({ color: 'purple' });

  const material = createMaterial();
  const cube = new Mesh(geometry, material);

  // cube.rotation.set(-0.5, -0.1, 0.8);
  // cube.position.x = -2

  const radiansPerSecond = MathUtils.degToRad(3);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    // cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    // cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };

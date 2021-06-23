import {
  SphereGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createMaterial() {
  // create a "standard" material
  const textureLoader = new TextureLoader();

  const textureBW = textureLoader.load(
    '/assets/textures/uv-test-bw.png',
  );


  const texture = textureLoader.load(
    '/assets/textures/uv-test-col.png',
  );

  console.log(texture)

  const material = new MeshStandardMaterial({
    map: texture,
    emissiveMap: textureBW,
    // emissiveIntensity: 2
    alphaMap: texture,
    // normalMap: texture
    displacementMap: texture
  });

  material.displacementScale = .02

  return material;
}

function createSphere() {
  const geometry = new SphereGeometry(1, 32, 32);
  // const material = new MeshStandardMaterial({ color: 'purple' });

  const material = createMaterial();
  const sphere = new Mesh(geometry, material);
  sphere.position.x = 2

  sphere.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(45);

  // this method will be called once per frame
  sphere.tick = (delta) => {
    // increase the cube's rotation each frame
    sphere.rotation.z += radiansPerSecond * delta;
    sphere.rotation.x += radiansPerSecond * delta;
    // sphere.rotation.y += radiansPerSecond * delta;
  };

  return sphere;
}

export { createSphere };

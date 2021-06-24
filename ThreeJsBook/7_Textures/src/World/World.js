import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createSphere } from './components/sphere.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const cube = createCube();
    const sphere = createSphere();
    const light = createLights();

    loop.updatables.push(cube, sphere);

    scene.add(cube, light, sphere);

    const resizer = new Resizer(container, camera, renderer);

  }

  animate() {
    requestAnimationFrame( animate );
    render();
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);

    const timer = Date.now() - start;

  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };

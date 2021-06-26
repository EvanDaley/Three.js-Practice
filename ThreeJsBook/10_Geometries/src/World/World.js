import { createCamera } from './components/camera.js';
import {
  createAxesHelper,
  createGridHelper,
} from './components/helpers.js';
import { createLights } from './components/lights.js';
// import { createMeshGroup } from './components/meshGroup.js';
import { createScene } from './components/scene.js';
import { Train } from './components/Train/Train.js';

import { createControls } from './systems/controls.js';
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

    const controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight } = createLights();
    // const meshGroup = createMeshGroup();

    const train = new Train();

    loop.updatables.push(controls, train);
    scene.add(ambientLight, mainLight, train);

    for (let i = 0; i < 1; i++) {
      const clone = train.clone()
      clone.translateZ(i*-5-5)
      loop.updatables.push(controls, train);
      scene.add(clone);
    }

    const resizer = new Resizer(container, camera, renderer);

    // add the helpers to the scene
    scene.add(createAxesHelper(), createGridHelper());
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };

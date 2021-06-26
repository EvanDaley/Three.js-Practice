import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { loadBirds } from './components/birds/birds.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let scene;
let loop;
let controls;
let birds = []

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();
    controls.target.copy(parrot.position);

    birds.push(parrot, flamingo, stork)

    scene.add(parrot, flamingo, stork);
  }

  async switchTarget() {
    const focusedIndex = birds.findIndex(arrayElement => {
      // console.log(controls.target)
      return arrayElement.position.x == controls.target.x
    })
    const targetIndex = (focusedIndex + 1) % (birds.length)
    const targetObject = birds[targetIndex]

    console.log(birds)
    console.log(focusedIndex)
    // console.log(targetIndex)
    // console.log(targetObject)

    controls.target.copy(targetObject.position)
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

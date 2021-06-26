import { World } from './World/World.js';

async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  await world.init()

  // start the animation loop
  world.start();

  const button = document.querySelector('#switch-focus');
  const button1 = document.querySelector('#zoom-out');
  const button2 = document.querySelector('#reset');

  button.addEventListener("click", () => {
    world.switchTarget()
  });

  button1.addEventListener("click", () => {
    world.zoomOut()
  });

  button2.addEventListener("click", () => {
    world.reset()
  });
}

main().catch(err => {
  console.log(err)
});

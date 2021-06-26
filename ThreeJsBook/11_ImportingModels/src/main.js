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

  button.addEventListener("click", () => {
    world.switchTarget()
  });
}



main().catch(err => {
  console.log(err)
});

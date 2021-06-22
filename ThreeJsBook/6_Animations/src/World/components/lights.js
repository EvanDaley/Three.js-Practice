import { DirectionalLight } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 8);

  // move the light right, up, and towards us
  light.position.set(10, 10, 10);

  const metersPerSecond = 2000

  light.tick = (delta) => {
    // Changing the position of a directional light has no effect.
    // console.log(light.position)
    light.position.x += metersPerSecond * delta;
    light.position.y += metersPerSecond * delta;
    light.position.z += metersPerSecond * delta;
  }

  return light;
}

export { createLights };

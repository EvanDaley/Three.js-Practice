import { Color, Scene } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('white');

  return scene;
}

export { createScene };

import { WebGLRenderer } from 'three-js';

function createRenderer() {
  const renderer = new WebGLRenderer();

  return renderer;
}

export { createRenderer };

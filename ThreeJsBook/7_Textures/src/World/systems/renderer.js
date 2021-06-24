import { WebGLRenderer } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { AsciiEffect } from './../effects/AsciiEffect.js'

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  const effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );

  return effect;
}

export { createRenderer };

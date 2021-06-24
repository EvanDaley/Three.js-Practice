import { WebGLRenderer } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { AsciiEffect } from './../effects/AsciiEffect.js'

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  // const effect = new AsciiEffect( renderer, ' .,:;=|STEVEN`$', { invert: false, bColor: true, bResolution: .4 } );
  // const effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: false, bColor: true, bResolution: .4 } );
  const effect = new AsciiEffect(
    renderer,
    ' .\'`^",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$',
    {
      // bColor: 'white',
      // invert: true, 
      // bColor: 'black', 
      // bBlock: true
      // bResolution: .
    }
  );

  return renderer;

  return effect;
}

export { createRenderer };

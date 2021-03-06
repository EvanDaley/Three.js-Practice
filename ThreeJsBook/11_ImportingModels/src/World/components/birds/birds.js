import { GLTFLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBirds() {
    const loader = new GLTFLoader();
  
    const [parrotData, flamingoData, storkData] = await Promise.all([
      loader.loadAsync('/assets/models/Parrot.glb'),
      loader.loadAsync('/assets/models/Flamingo.glb'),
      loader.loadAsync('/assets/models/Stork.glb'),
    ]);
  
    console.log('Squaaawk!', parrotData);
  
    const parrot = setupModel(parrotData);
    
    const flamingo = setupModel(flamingoData);
    
    const stork = setupModel(storkData);

    flamingo.position.set(7.5, 0, -10);
    parrot.position.set(.1, 0, 2.5);
    stork.position.set(0, -2.5, -10);

    return {
      parrot,
      flamingo,
      stork,
    };
  }

export { loadBirds };
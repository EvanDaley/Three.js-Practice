import { AnimationMixer } from 'https://unpkg.com/three@0.127.0/src/animation/AnimationMixer.js';

function setupModel(data) {
    const model = data.scene.children[0];
    const clip = data.animations[0];

    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(clip);
    // action.play();

    action.startAt(2)
    .setEffectiveTimeScale(0.7)
    .play();

    

    model.tick = (delta) => mixer.update(delta);

    return model;
}

export { setupModel };
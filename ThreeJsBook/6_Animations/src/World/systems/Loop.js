import { Clock } from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera
        this.scene = scene
        this.renderer = renderer
        this.updateables = []
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            // Tell every animation to tick forward one frame
            this.tick()

            // Render the scene again
            this.renderer.render(this.scene, this.camera)
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null)
    }

    tick() {
        const delta = clock.getDelta();

        for (const object of this.updateables) {
            object.tick(delta)
        }
    }
}

export { Loop }
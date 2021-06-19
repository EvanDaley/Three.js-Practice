import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

const parameters = {
    color: 0xff69,
    spin: () => {
        gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + 10 })      
    }
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: parameters.color })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Debug
 */
const gui = new dat.GUI()

gui
    .addColor(parameters, 'color')
    .onChange(() => {
        material.color.set(parameters.color)
    })

gui
    .add(mesh.position, 'y')
    .min(-3)
    .max(3)
    .step(0.01)
    .name("cube elevation")

gui
    .add(mesh, 'visible')

gui
    .add(mesh.material, 'wireframe')

gui
    .add(parameters, 'spin')


// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})

// window.addEventListener('dblclick', () =>
// {
//     const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

//     if(!fullscreenElement)
//     {
//         if(canvas.requestFullscreen)
//         {
//             canvas.requestFullscreen()
//         }
//         else if(canvas.webkitRequestFullscreen)
//         {
//             canvas.webkitRequestFullscreen()
//         }
//     }
//     else
//     {
//         if(document.exitFullscreen)
//         {
//             document.exitFullscreen()
//         }
//         else if(document.webkitExitFullscreen)
//         {
//             document.webkitExitFullscreen()
//         }
//     }
// })

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
// controls.enabled = false
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

gsap.to(mesh.position, { duration: 1, delay: 1, x: 1 })
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 })

// Clock
const clock = new THREE.Clock()

// Animations
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update Objects


    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()
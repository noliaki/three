import * as THREE from 'three'

const scene: THREE.Scene = new THREE.Scene()
const camara = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()

renderer.setClearColor(new THREE.Color(0x000))
renderer.setSize(window.innerWidth, window.innerHeight)

const axes = new THREE.AxisHelper(20)
scene.add(axes)

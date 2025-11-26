import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { shiv, luz} from "/shiv.js"

const cena = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000 
)
camera.position.set(0,20,35)
camera.lookAt(0,0,0)

const renderizador = new THREE.WebGLRenderer()
renderizador.setAnimationLoop(frames)
renderizador.setClearColor("rgba(98, 37, 37, 1)")
renderizador.setSize(window.innerWidth / 1.01, window.innerHeight / 1.01)
document.body.appendChild( renderizador.domElement)

const controles = new OrbitControls( camera, renderizador.domElement )
const loader = new GLTFLoader()

shiv(10, 10, 10, 0, -10, 0, cena)
luz( 5, 10, 5, "#fff", 5, cena)
luz( -5, -10, 5, "#fff", 1, cena)

function frames() {
  controles.target.set(0,1,0)
  controles.update()
  renderizador.render( cena, camera )
}
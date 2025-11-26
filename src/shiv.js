import * as THREE from "three"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
console.log("Criando Mundo...")


export function shiv (x, y, z, xP, yP, zP, cena){

    const loader = new GLTFLoader()
    const shiv = loader.load("./Shivalinga1.glb", (gltf)=>{
        const model = gltf.scene
        model.scale.set(x, y, z)
        model.position.set(xP, yP, zP)
        cena.add(model)

    }, undefined, (err) =>{
        console.log("Erro ao renderizar ", err)
    })
    cena.add(shiv)
}

export function luz( x, y, z, cor , intensidade, cena){

    let luz = new THREE.DirectionalLight(cor, intensidade)
    luz.position.set( x, y, z )
    cena.add(luz)

}
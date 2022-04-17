<template>
  <div>
    <canvas class="webgl"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



export default {
    methods:{
      line(){

        /* Base */
        //Canvas
         const canvas = document.querySelector('canvas')
      // Scene
      const scene = new THREE.Scene()
      
    /* Material */
          const material =  new THREE.LineBasicMaterial({color: 0x0000ff})
    /* pointsGeometry */
          const points = []
          points.push(new THREE.Vector3(-10,0,0))
          points.push(new THREE.Vector3(0,10,0))
          points.push(new THREE.Vector3(10,0,0))
          

          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

          const line = new THREE.Line(lineGeometry, material)
          
      

    /*  Renderer */
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas, 
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      document.body.appendChild(renderer.domElement)

      
    /* Sizes */
            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight
            }
            window.addEventListener('resize', () =>
            {
                // Update sizes
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight
                // Update camera
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()
                // Update renderer
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })


    /* Camera */
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1 ,500
      );
      camera.position.set(0,0,100)
      camera.lookAt(0,0,0)

      scene.add(line)

      renderer.render(scene, camera)


      }
    },
    mounted(){
      console.log(this.line())
    
    },

}
</script>

<style>

</style>
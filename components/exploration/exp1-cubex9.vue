<template>
<!--   <h1>Base</h1> -->
<div>
  <canvas class="webgl"></canvas>
</div>
</template>

<script>
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';






export default {

    mounted(){
    
    /* Base */
     /* canvas */
            const canvas = document.querySelector('canvas')
      // Scene
      const scene = new THREE.Scene()
      
    /* Material */
          const material =  new THREE.MeshNormalMaterial({color: 0x0000ff})
    /* Box */
    
          // const geometry = new THREE.BoxGeometry(10,10,10)
          // const cube = new THREE.Mesh(geometry, material)
          // scene.add(cube)

            const geometry = new THREE.BoxGeometry(10,10,10)


          let cube =[];

          for(let i = 0 ; i < 3 ; i++){
            for (let j = 0 ; j < 3; j++){
              for (let k = 0 ; k < 3; k++){

                cube[i] = new THREE.Mesh(geometry, material)
                // console.log(cube[i].position);
                cube[i].position.x = - 15 + (i * 15 )
                cube[i].position.y = - 15 + (j * 15 )
                cube[i].position.z = - 15 + (k * 15 )
              
                scene.add(cube[i])
              }
            }
          }
          
      

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
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1 ,10000
      );
      camera.position.set(0,0,100)
      camera.lookAt(0,0,0)
    
    
    /*  Renderer */
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas, 
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setAnimationLoop( animation );
      document.body.appendChild(renderer.domElement)

      
      
      renderer.render(scene, camera)
      
      
    /* Control */
      const controls = new OrbitControls(camera, canvas)
            controls.enableDamping = true
            

//controls.update() must be called after any manual changes to the camera's transform
//camera.position.set( 0, 20, 100 );
controls.update();


            const stats = Stats()
            document.body.appendChild(stats.dom)
            
             // animation
            function animation( time ) {
                controls.update()
                

                 
              
              
                
                stats.update()
                renderer.render( scene, camera );
        
            }

      
    },

}
</script>

<style scoped>

</style>


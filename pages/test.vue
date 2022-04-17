<template>
<!--   <h1>Base</h1> -->
<div>
  <canvas class="webgl"></canvas>
</div>
</template>

		

<script>

import gsap from "gsap";
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js';




//console.log("gsap:", gsap)


export default {

    mounted(){
    
    /* Base */
     /* canvas */
            const canvas = document.querySelector('canvas')
      // Scene
      const scene = new THREE.Scene()
    //   scene.fog = new THREE.Fog(0x000000,1,750)
      
    /* Material */
          const material =  new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
            })

    /* Object */
      const object = new THREE.Group();
      scene.add(object)

    /* Box */
    
        const geometry = new THREE.BoxGeometry(100,100,100)
        const cube = new THREE.Mesh(geometry, material)
	
        scene.add(cube)
      

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

          scene.add( new THREE.AmbientLight( 0xffffff ) );

				const light = new THREE.DirectionalLight( 0xffffff );
				light.position.set( 1, 1, 1 );
				scene.add( light );


    /* Camera */
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1 ,10000
      );

      let cameraPositionY = 100
      camera.position.set(100,cameraPositionY,100)
      camera.lookAt(1,1,1)
    
    
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
      

      /* PostProcessing */
        // const composer =  new EffectComposer(renderer)
        // composer.addPass(new RenderPass(scene, camera))

        // const effect1 = new ShaderPass( DotScreenShader );
		// 		effect1.uniforms[ 'scale' ].value = 8;
		// 		composer.addPass( effect1 );
        
        // const effect2 = new ShaderPass( RGBShiftShader );
		// 		effect2.uniforms[ 'amount' ].value = 0.015;
		// 		composer.addPass( effect1 );

      
    /* Control */
      const controls = new OrbitControls(camera, canvas)
            controls.enableDamping = true
            

//controls.update() must be called after any manual changes to the camera's transform
//camera.position.set( 0, 20, 100 );
controls.update();


            const stats = Stats()
            document.body.appendChild(stats.dom)
          


            /* gsap animation */
            

             // animation

            const clock = new THREE.Clock()
            let previousTime = 0

            function animation( time ) {

            //écoulé
            const elapsedTime = clock.getElapsedTime()
            //time between now and last milisecond
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime
                controls.update()
                

                 
              object.rotation.x += 0.005;
				      object.rotation.y += 0.01;
              

				    //   composer.render();
              
                
              stats.update()
                renderer.render( scene, camera );
        
            }

      
    },

}
</script>

<style scoped>

</style>


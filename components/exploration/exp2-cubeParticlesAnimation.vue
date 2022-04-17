<template>
<!--   <h1>Base</h1> -->
<div>
  <canvas class="webgl"></canvas>
</div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module'





export default {

    mounted(){
    
    /* Base */
      // canvas 
       const canvas = document.querySelector('canvas')
      // Scene
      const scene = new THREE.Scene()
      

    /* Vertices */
          const vertices = []

          for(let i  = 0; i < 10000; i++){
            
            const x = THREE.MathUtils.randFloatSpread(2000)
            const y = THREE.MathUtils.randFloatSpread(2000)
            const z = THREE.MathUtils.randFloatSpread(2000)

            vertices.push(x,y,z)
          }

    /* geometry */
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices,3))

    /* Material */
          const material = new THREE.PointsMaterial({
            color: 0x888888,
            
					size: 10,
					blending: THREE.AdditiveBlending,
					transparent: true,
					sizeAttenuation: true
            })

    /* Points */
          const points = new THREE.Points(geometry, material)
          scene.add(points)
    
      
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
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1 ,10000);
      camera.position.set(1000,1000,1000)
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
            
            
            
      /* Stats */
        const stats = Stats()
        document.body.appendChild(stats.dom)
      
      
      
    /* animation */
          const clock = new THREE.Clock()
          let previousTime = 0

          const animation =  () => {
            //écoulé
            const elapsedTime = clock.getElapsedTime()
            //time between now and last milisecond
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime
            
              controls.update()

              points.rotation.x = (elapsedTime  * 0.2) - deltaTime
              points.rotation.z = (elapsedTime  * 0.2) -  deltaTime
              
              points.scale.set(elapsedTime / 5, elapsedTime / 5,  elapsedTime / 5)


              let scaleAnimation = (elapsedTime / 3) - deltaTime
              const maxScale = 0.4
              if(scaleAnimation < maxScale){
                points.scale.set(scaleAnimation, scaleAnimation, scaleAnimation)
              }
              else{
                points.scale.set(maxScale,maxScale,maxScale) 
              }
              
            stats.update()
              renderer.render( scene, camera );
              

              // Call tick again on the next frame
              window.requestAnimationFrame(animation)
            }
            animation()
    },
}
</script>

<style scoped>

</style>>

</style>
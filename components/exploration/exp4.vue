<template>
<!--   <h1>Base</h1> -->

<div>
  <!-- <canvas class="webgl"></canvas> -->
  <div id ="canvas"></div>
  <div class="plane">
    <img src="https://img.francis-lamontagne.com/nadia.jpg"/>
  </div>
  
</div>
</template>

	

<script>
import {Curtains, Plane} from 'curtainsjs';



export default {
mounted(){
  // wait for everything to be ready
window.addEventListener("load", () => {
// set up our WebGL context and append the canvas to our wrapper
const curtains = new Curtains({
container: "canvas"
});
// get our plane element
const planeElement = document.getElementsByClassName("plane")[0];
// set our initial parameters (basic uniforms)
const vertexShaderID = (text) => {
 const tag = document.createElement("script");
    tag.setAttribute("type", "x-shader/x-vertex");
    const tnode = document.createTextNode(text);
    tag.appendChild(tnode);
    
    document.head.appendChild(tag);
    return tag.textContent;
}
const vertexShader = `
    precision mediump float;

    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    uniform mat4 uTextureMatrix0;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;
    void main() {
      vec3 vertexPosition = aVertexPosition;
      gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

      vTextureCoord = (uTextureMatrix0 * vec4(aTextureCoord, 0.0, 1.0)).xy;
      vVertexPosition = vertexPosition;
    }
`;


const fragmentShader = `
    precision mediump float;

    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    uniform float uTime;

    uniform sampler2D uSampler0;
    void main() {
      vec2 textureCoord = vTextureCoord;
      textureCoord.x += sin(textureCoord.y * 25.0) * cos(textureCoord.x * 25.0) * (cos(uTime / 50.0)) / 25.0;
      gl_FragColor = texture2D(uSampler0, textureCoord);
    }
`;

const params = {
vertexShaderID: vertexShader(vertexShaderID), // our vertex shader ID
fragmentShaderID: fragmentShader(fragmentShaderID), // our fragment shader ID
uniforms: {
time: {
name: "uTime", // uniform name that will be passed to our shaders
type: "1f", // this means our uniform is a float
value: 0,
},
},
};
// create our plane using our curtains object, the HTML element and the parameters
const plane = new Plane(curtains, planeElement, params);
plane.onRender(() => {
// use the onRender method of our plane fired at each requestAnimationFrame call
plane.uniforms.time.value++; // update our time uniform value
});
});

}

}
</script>

<style scoped>
body {
/* make the body fits our viewport */
position: relative;
width: 100%;
height: 100vh;
margin: 0;
overflow: hidden;
}
#canvas {
/* make the canvas wrapper fits the document */
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
}
.plane {
/* define the size of your plane */
width: 80%;
height: 80vh;
margin: 10vh auto;
}
.plane img {
/* hide the img element */
display: none;
}

</style>




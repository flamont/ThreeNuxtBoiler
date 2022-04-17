<template>
<div class="layout">
    <Index/>

            <NuxtLink to="/base">Base</NuxtLink>
    <ul>
        <h2>Technical-Exemples</h2>
        <li>
            <NuxtLink to="/TechnicalExemple/box">Box</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/TechnicalExemple/line">Line</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/TechnicalExemple/pointsMaterial">PointsMaterial</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/TechnicalExemple/postprocessing">Postprocessing</NuxtLink>
        </li>
    </ul>

    <ul>
        <h2>Exploration</h2>
        <li>
            <NuxtLink to="/Exploration/exp1-cube9x">exp1-cubex9</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/Exploration/exp2-cubeParticlesAnimation">exp2-cubeParticlesAnimation</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/Exploration/exp3-postGsap">exp3-postGsap</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/Exploration/exp4">exp4</NuxtLink>
        </li>
    </ul>
    
</div>
</template>
<script>
import Index from '../components/index.vue'

export default {
    components:{
        Index,
    }
}
</script>

<style scoped>
.layout{
    padding:24px;
    line-height: 1.25;
}
h2{
    margin:12px 0;
}
li{
    /* list-style: none; */
    list-style-type: '- ';
    margin:2px 8px 2px;
}
</style>
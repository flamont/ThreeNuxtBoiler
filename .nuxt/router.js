import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ae1473f = () => interopDefault(import('../pages/base.vue' /* webpackChunkName: "pages/base" */))
const _2d22bc80 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _c976b2fa = () => interopDefault(import('../pages/Exploration/exp1-cube9x.vue' /* webpackChunkName: "pages/Exploration/exp1-cube9x" */))
const _95d4ec0c = () => interopDefault(import('../pages/Exploration/exp2-cubeParticlesAnimation.vue' /* webpackChunkName: "pages/Exploration/exp2-cubeParticlesAnimation" */))
const _6c60cd08 = () => interopDefault(import('../pages/Exploration/exp3-postGsap.vue' /* webpackChunkName: "pages/Exploration/exp3-postGsap" */))
const _db74b69e = () => interopDefault(import('../pages/Exploration/exp4.vue' /* webpackChunkName: "pages/Exploration/exp4" */))
const _09ddfa9b = () => interopDefault(import('../pages/TechnicalExemple/box.vue' /* webpackChunkName: "pages/TechnicalExemple/box" */))
const _15c4d058 = () => interopDefault(import('../pages/TechnicalExemple/line.vue' /* webpackChunkName: "pages/TechnicalExemple/line" */))
const _1f22760a = () => interopDefault(import('../pages/TechnicalExemple/pointsMaterial.vue' /* webpackChunkName: "pages/TechnicalExemple/pointsMaterial" */))
const _0c9af613 = () => interopDefault(import('../pages/TechnicalExemple/postprocessing.vue' /* webpackChunkName: "pages/TechnicalExemple/postprocessing" */))
const _dfeae258 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/base",
    component: _0ae1473f,
    name: "base"
  }, {
    path: "/test",
    component: _2d22bc80,
    name: "test"
  }, {
    path: "/Exploration/exp1-cube9x",
    component: _c976b2fa,
    name: "Exploration-exp1-cube9x"
  }, {
    path: "/Exploration/exp2-cubeParticlesAnimation",
    component: _95d4ec0c,
    name: "Exploration-exp2-cubeParticlesAnimation"
  }, {
    path: "/Exploration/exp3-postGsap",
    component: _6c60cd08,
    name: "Exploration-exp3-postGsap"
  }, {
    path: "/Exploration/exp4",
    component: _db74b69e,
    name: "Exploration-exp4"
  }, {
    path: "/TechnicalExemple/box",
    component: _09ddfa9b,
    name: "TechnicalExemple-box"
  }, {
    path: "/TechnicalExemple/line",
    component: _15c4d058,
    name: "TechnicalExemple-line"
  }, {
    path: "/TechnicalExemple/pointsMaterial",
    component: _1f22760a,
    name: "TechnicalExemple-pointsMaterial"
  }, {
    path: "/TechnicalExemple/postprocessing",
    component: _0c9af613,
    name: "TechnicalExemple-postprocessing"
  }, {
    path: "/",
    component: _dfeae258,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

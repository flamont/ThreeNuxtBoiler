
import webpack from 'webpack';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Francis Lamontagne | ThreeJsExploration',
        htmlAttrs: {
            lang: 'fr'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'francis-lamontagne.com' },
            { name: 'format-detection', content: 'telephone=no' },
            
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
          '~/assets/css/global.css',
    ],
    loading: '~/components/LoadingBar.vue',
    target: 'static',// default is 'server'
     ssr: false,
    /* vue: {
        config: {
            productionTip: false,
            devtools: true,
        }
    }, */

    // modules: [
    //     'nuxt-gsap-module',
    // ],

     //buildModules: ['nuxt-gsap-module'],

    gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  },

    pageTransition: 'page',
    /*
     ** You can extend webpack config here
     */
    buildModules: [
    // Simple usage
    // '@nuxtjs/vuetify',

    // With options
    //['@nuxtjs/vuetify', { /* module options */ }]
  ],
    build: {
        //analyze: true,
        transpile: ['gsap'],
        transpile: ['three'],
         
        // extend(config, ctx) {
        //     config.plugins.push(new webpack.ProvidePlugin({
        //         THREE: 'three'
        //     }));

        //     // Run ESLint on save
        //     if (ctx.isDev && ctx.isClient) {
        //         config.module.rules.push({
        //             enforce: 'pre',
        //             test: /\.(js|vue)$/,
        //             loader: 'eslint-loader',
        //             exclude: /(node_modules)/
        //             // options: {
        //             //     fix: true
        //             // }
        //         });
        //     }
        // }
    
    }
}
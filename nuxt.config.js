const isProd = process.env.NODE_ENV === 'production'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Girls Travel | Female Travel Community',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3897f0' },
  /*
   ** Global CSS
   */
  css: [
    '@assets/sass/main.sass'
    // 'quill/dist/quill.snow.css',
    // 'quill/dist/quill.bubble.css',
    // 'quill/dist/quill.core.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/global-components.js' },
    { src: '~/plugins/vee-validate', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/vue-scroll-lock', ssr: false },
    { src: '~plugins/vue-quill-editor.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
    // Doc: https://matteogabriele.gitbooks.io/vue-analytics/
    ['@nuxtjs/google-analytics', {
      id: 'UA-126987500-3',
      debug: {
        // enabled: !isProd,
        sendHitTask: isProd
      }
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/moment',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/toast',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    'nuxt-client-init-module',
    'nuxt-vuex-router-sync'
  ],
  /*
   ** Toast settings
   */
  toast: {
    position: 'top-right',
    duration: 5000
  },
  /*
   ** Nuxt.js modules
   */
  styleResources: {
    sass: ['@/assets/sass/global.sass']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Define the development or production mode of Nuxt.js
   ** See https://nuxtjs.org/api/configuration-dev
   */
  dev: !isProd,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Add exception
     ** See https://logaretm.github.io/vee-validate/guide/rules.html#importing-rules-in-nuxt-js
     */
    transpile: [
      'vee-validate/dist/rules'
    ],
    extractCSS: isProd,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
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
    '@assets/sass/main.sass'//,
    // 'quill/dist/quill.snow.css',
    // 'quill/dist/quill.bubble.css',
    // 'quill/dist/quill.core.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/global-components.js' },
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~plugins/vue-quill-editor.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
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
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Atefeh Atashi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/A.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  // https://i18n.nuxtjs.org
  i18n: {
    lazy: true,
    langDir: 'locales/',
    locales: [{ code: 'en', iso: 'en-US', file: 'en' }],
    defaultLocale: 'en',
  },


  plugins: [
    {src: '~/plugins/parallax.js', mode:'client'}
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
}

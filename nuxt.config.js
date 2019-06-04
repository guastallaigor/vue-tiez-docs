const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'spa',
  cache: true,

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'pt-BR'
    },
    noscript: [{ innerHTML: 'This website needs JavaScript' }],
    title: 'Vue Tiez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue Tiez' },
      { name: 'title', content: 'Vue Tiez' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'robots', content: 'index,follow' },
      { name: 'keywords', content: 'vue,tiez,design,system,component,framework,vuejs' },
      // Open Graph
      { name: 'og:title', content: 'Vue Tiez' },
      { name: 'og:description', content: 'Vue Tiez' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://guastallaigor.now.sh' },
      { name: 'og:image', content: 'https://guastallaigor.now.sh/favicon.png' },
      { name: 'og:locale', content: 'pt_BR' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@guastallaigor' },
      { name: 'twitter:title', content: 'Vue Tiez' },
      { name: 'twitter:description', content: 'Vue Tiez' },
      { name: 'twitter:image', content: 'https://guastallaigor.now.sh/favicon.png' },
      { name: 'twitter:image:alt', content: 'Logo Igor Guastalla' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'google-site-verification', content: 'YrK6btveUmKHAC-LVZstuNXNO08QblqJvyAZ0fGEU-o' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#895DE9', height: '10px' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-purgecss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-133326737-2',
      disabled: () => document.cookie.indexOf('ga_optout=true') !== -1,
      debug: {
        sendHitTask: isProd
      },
      set: [
        { field: 'anonymizeIp', value: true }
      ]
    }]
  ],
  vendor: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      [].concat(...config.module.rules.find(e => e.test.toString().match(/\.styl/)).oneOf.map(e => e.use.filter(e => e.loader == 'stylus-loader'))).forEach(stylus => {
        Object.assign(stylus.options, {
          import: [
            '~rupture/rupture/index.styl'
          ]
        })
      })

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

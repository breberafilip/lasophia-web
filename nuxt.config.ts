import { NuxtConfig } from '@nuxt/types'
import { dynamicRoutes } from './routes'

const config: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'La Sophia - Soutěž pro talentované děti',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:title',
        content: 'La Sophia - Soutěž pro talentované děti',
      },
      {
        property: 'og:description',
        content:
          'La Sophia je soutěž vedená Yvettou Blanarovičovou s cílem podpory rozvíjení nadání a vzdělávání talentovaných dětí ze sociálně znevýhodněných rodin, dětských domovů a dětí s mírnou formou handicapu.',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'La Sophia je soutěž vedená Yvettou Blanarovičovou s cílem podpory rozvíjení nadání a vzdělávání talentovaných dětí ze sociálně znevýhodněných rodin, dětských domovů a dětí s mírnou formou handicapu.',
      },
      { name: 'theme-color', content: '#333333' },
    ],
    link: [
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/Poppins-Regular.woff2',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: '/fonts/Poppins-Bold.woff2',
        crossorigin: 'anonymous',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-plyr', mode: 'client' },
    { src: '~/plugins/vue-datepicker', mode: 'client' },
    { src: '~/plugins/headers', mode: 'client' },
    '~/plugins/vee-validate.js',
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    'nuxt-compress',
    '@nuxtjs/google-analytics',
  ],

  'nuxt-compresss': {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },
  loading: {
    color: '#fedc5d',
    height: '5px',
    throttle: 0,
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-lazy-load',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxtjs/recaptcha',
    'nuxt-logrocket',
  ],
  markdownit: {
    runtime: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },
  recaptcha: {
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 3,
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
  },
  axios: {
    baseURL: process.env.API_URL ?? 'http://localhost:1337',
  },
  generate: {
    routes: dynamicRoutes,
  },
  sitemap: {
    hostname: process.env.SITE_URL,
  },
  styleResources: {
    scss: ['assets/scss/_breakpoints.scss'],
  },
  googleAnalytics: {
    id: process.env.UA_TAG,
  },
  strapi: {
    url: process.env.API_URL ?? 'http://localhost:1337',
  },
  pwa: {
    manifest: {
      lang: 'cs',
      name: 'La Sophia',
      theme_color: '#81B5CB',
      background_color: '#81b5cb',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: '/maskable_icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: '/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  extractCSS: {
    allChunks: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    extractCSS: true,
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[hash:base64:4]',
        },
      },
    },
  },
}

export default config

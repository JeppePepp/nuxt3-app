import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/prismic'],
  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
  ],
  prismic: {
    endpoint: 'arnerpartners',
  },
  build: {
    transpile: ['@heroicons/vue'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        '@headlessui/vue',
        '@heroicons/vue/solid',
        '@heroicons/vue/outline',
        'vue',
        'pinia',
        'ufo',
      ],
    },
  },
});

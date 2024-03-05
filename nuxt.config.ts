// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-graphql-client',
  ],
  'graphql-client': {
    clients: {
      default: {
        host: 'https://countries.trevorblades.com/',
      },
    },
  },
})

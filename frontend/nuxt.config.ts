// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@samk-dev/nuxt-vcalendar", "nuxt-graphql-client"],
  css: ['~/assets/style/main.css', '~/assets/fonts/inter.css'],
  ui: {
    icons: ['fluent']
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST
    }
  }
})
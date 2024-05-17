// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@samk-dev/nuxt-vcalendar", "nuxt-graphql-client"],
  ui: {
    icons: ['fluent']
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST
    }
  }
})
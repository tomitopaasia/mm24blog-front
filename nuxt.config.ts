// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  telemetry: false,
  // Nuxt UI moodul + Tailwind CSS (https://ui.nuxt.com/docs/getting-started/installation/nuxt)
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
})

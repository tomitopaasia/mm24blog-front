// Nuxt UI paigaldatakse dokumentatsiooni järgi Nuxti moodulina (nuxt.config.ts → modules),
// moodul registreerib komponendid (U*) ise. Selles pluginas seadistame Vuetify näite
// eeskujul raamistiku käitusaja konfiguratsiooni: blogi teemavärvid.
// https://ui.nuxt.com/docs/getting-started/theme/design-system#colors
export default defineNuxtPlugin(() => {
  updateAppConfig({
    ui: {
      colors: {
        primary: 'emerald',
        neutral: 'slate',
      },
    },
  })
})

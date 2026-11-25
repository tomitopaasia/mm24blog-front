// PrimeVue paigaldus (https://primevue.org/vite/) Nuxti pluginana,
// samamoodi nagu Vuetify näites (app/plugins/vuetify.ts).
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Menubar from 'primevue/menubar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    // "styled" režiim: Aura teema, värvid CSS muutujatena (--p-*)
    theme: {
      preset: Aura,
    },
  })

  // registreerime kasutatavad komponendid globaalselt
  nuxtApp.vueApp.component('Menubar', Menubar)
})

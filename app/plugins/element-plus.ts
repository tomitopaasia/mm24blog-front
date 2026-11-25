// Element Plus "Full import" (https://element-plus.org/en-US/guide/quickstart.html)
// tehtud Nuxti pluginana samamoodi nagu Vuetify näites (app/plugins/vuetify.ts).
import 'element-plus/dist/index.css'

import ElementPlus, { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from 'element-plus'
import et from 'element-plus/es/locale/lang/et'

export default defineNuxtPlugin((nuxtApp) => {
  // SSR jaoks vajalikud väärtused (https://element-plus.org/en-US/guide/ssr.html),
  // et serveris ja brauseris genereeritud id-d ja z-index'id ühtiksid.
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })
  nuxtApp.vueApp.provide(ZINDEX_INJECTION_KEY, { current: 0 })

  // registreerib kõik El* komponendid globaalselt, keeleks eesti keel
  nuxtApp.vueApp.use(ElementPlus, { locale: et })
})

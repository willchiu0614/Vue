import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './route'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')

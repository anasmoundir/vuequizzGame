import { createApp } from 'vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
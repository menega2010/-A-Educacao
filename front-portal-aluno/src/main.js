import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { TheMaskPlugin } from 'vue-the-mask';

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(TheMaskPlugin)
  .mount('#app');
 

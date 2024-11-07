
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'

library.add(fas)

createApp(App)
  .use(createPinia())
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app')




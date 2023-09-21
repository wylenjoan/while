import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.mount('#app')

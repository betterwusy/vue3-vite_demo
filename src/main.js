import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './plugins/i18n'
import { pinia } from './store'

const app = createApp(App)
app.use(pinia)
app.use(i18n, {
  greetings: {
    hello: 'Bonjour'
  }
})
app.mount('#app')

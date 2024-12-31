import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import ui from './ui'
import store from './store'
const app = createApp(App)
ui.map(component => app.component(component.name, component))
app.use(store)
app.use(router)
app.mount('#app')

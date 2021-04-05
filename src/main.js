import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/index.css'
import 'default-passive-events'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
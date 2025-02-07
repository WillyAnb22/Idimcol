import { createApp } from 'vue'
import {router} from "./routes/routes .js"
import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App)

app.use(router)

app.mount('#app')
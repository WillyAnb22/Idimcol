import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import {router} from "./routes/routes.js"
import './style.css'
import App from './App.vue'


const MyApp = createApp(App)
MyApp.use(router)
MyApp.use(Quasar,{
    plugins: {}
})
MyApp.mount('#app')
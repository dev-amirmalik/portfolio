import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Oruga from '@oruga-ui/oruga-next';

import "@oruga-ui/oruga-next/dist/oruga-full.css"
import './assets/main.scss'
import "@fortawesome/fontawesome-free/css/all.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Oruga)

app.mount('#app')

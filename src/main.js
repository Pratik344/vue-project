import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'buefy/dist/buefy.css'
import router from './Routes'
import store from './store'







createApp(App).use(store).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import router from './router/router';
import store from './store/store';
createApp(App).use(router).use(store).mount('#app')

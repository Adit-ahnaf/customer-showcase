import './assets/main.css'
import { register } from 'swiper/element/bundle';
import { createApp } from 'vue'
import App from './App.vue'

const swiper = register();
createApp(App).use(swiper).mount('#app')

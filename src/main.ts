import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(VueAxios, axios).use(store).use(router)
  .mount('#app');

axios.defaults.baseURL = 'http://vuestore.getsandbox.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';

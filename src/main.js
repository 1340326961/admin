import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/static/css/base.css'
import '@/mock/index.js'
import axios from 'axios'
Vue.use(Avue);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

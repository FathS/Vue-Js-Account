import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'
import Element from 'element-ui'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'



export const serverBus = new Vue();

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

Vue.prototype.$axios = axiosInstance;


/***** Font İcon *****/
import './assets/Css/kgfd-icons.css'
import './assets/Css/font-awesome.min.css'

/***** Element UI *****/
import 'element-ui/lib/theme-chalk/index.css';

/***** Template Css *****/
import './assets/Css/kgfd.css'
import './assets/Css/kgfd-theme.css'



Vue.use(Element)
Vue.use(Vuelidate)
Vue.use(Vuex)



Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App)
}).$mount('#app')

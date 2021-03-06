import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'
import Element from 'element-ui'
import Vuelidate from 'vuelidate'
import { store } from './store/store'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar';



// set auth header
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

export const serverBus = new Vue();

const axiosInstance = axios.create({
  baseURL: "http://localhost:1256/",
  headers: {
    Authorization: 'Bearer {token}'
  }
});

Vue.prototype.$axios = axiosInstance;

const accessToken = localStorage.getItem('access_token')

if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}

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
Vue.component('v-chart', ECharts)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }
  },

}).$mount('#app')

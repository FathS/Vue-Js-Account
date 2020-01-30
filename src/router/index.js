import Vue from 'vue'
import Router from 'vue-router'
import TodosList from '../components/Personel/List.vue'
import TodosDetail from '../components/Personel/update.vue'
import Login from '../components/Personel/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: TodosList
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/:id/edit',
      name: 'detail',
      component: TodosDetail
    },
    { path: '/', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }

  ]
})



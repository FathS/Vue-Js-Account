import Vue from 'vue'
import Router from 'vue-router'
import TodosList from '../components/Personel/List.vue'
import TodosDetail from '../components/Personel/update.vue'
import Register from '../components/Personel/register.vue'
import Login from '../components/Account/login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/Todoslist',
      name: 'todoslist',
      component: TodosList,
      meta: {
        public: false,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }

    },
    {
      path: '/register',
      component: Register
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
    { path: '*', redirect: { name: 'home' } }

  ]
})



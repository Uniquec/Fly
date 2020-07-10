import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/Login';
import Homepage from '@/Homepage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    },
  ]
})

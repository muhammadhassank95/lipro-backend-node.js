import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login';
import User from '../views/User';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/users',
    name: 'User',
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

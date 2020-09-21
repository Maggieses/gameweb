import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [/*
  {
    path: '/',
    name: 'Home',
    component: Home
  },*/
  {
    path: '/games',
    name: 'Games',
    component: () => import('../components/Games.vue')
  },
  {
    path: '/game',
    name: 'game-detail',
    component: () => import('../components/Game.vue')
  },
  {
    path: '/Newgame',
    name: 'NewGame',
    component: () => import('../components/NewGame.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../components/Account.vue')
  },
  {
    path: '/review',
    name: 'Review',
    component: () => import('../components/Review.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  { 
    path: '*',
    redirect: '/games',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router


/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import OpenRequest from './views/OpenRequest.vue'
import signUp from './views/signUp.vue'
import RequestedRides from './views/ReqestedRides.vue'
import NewRoutes from './views/NewRoutes.vue'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: signUp
    },
    {
      path: '/open_req',
      name: 'open_req',
      component: OpenRequest
    },
    {
      path : "/requested_rides",
      name : 'requested_rides',
      component : RequestedRides
    },
    {
      path : "/new_routes",
      name : 'new_routes',
      component : NewRoutes
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // eslint-disable-next-line no-undef
    component: Home,
    redirect: '/About'
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/testViews',
    name: 'TestViews',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestViews.vue')
  },
  {
    path: '/elTable',
    name: 'ElTable',
    component: () => import(/* webpackChunkName: "about" */ '../views/ElTable.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

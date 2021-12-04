import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import Crew from '../views/Crew.vue'
import Technology from '../views/Technology.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination
  },
  {
    path: '/crew',
    name: 'Crew',
    component: Crew
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: Technology
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

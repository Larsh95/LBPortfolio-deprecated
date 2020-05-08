import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Minime from '../components/minime.vue'
import CV from '../components/cv.vue'
import videoCV from '../components/videoCV.vue'
import Infomercial from '../components/infomercial.vue'
import Photocomp from '../components/photocomp.vue'
import Aboutme from '../components/aboutme.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/minime',
    name: 'Minime',
    component: Minime
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: Aboutme
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  },
  {
    path: '/videocv',
    name: 'VideoCV',
    component: videoCV
  },
  {
    path: '/infomercial',
    name: 'Infomercial',
    component: Infomercial
  },
  {
    path: '/photocomp',
    name: 'Photocomp',
    component: Photocomp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

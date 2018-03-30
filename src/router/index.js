import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bookings from '@/components/Bookings'
import Gallery from '@/components/Gallery'
import About from '@/components/About'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      icon: 'home',
      component: Home
    },
    {
      path: '/BookSession',
      name: 'Book A Session',
      icon: 'date_range',
      component: Bookings
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      icon: 'photo_library',
      component: Gallery
    },
    {
      path: '/About',
      name: 'About',
      icon: 'account_box',
      component: About
    }
  ]
})

export default router

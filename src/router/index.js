import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bookings from '@/components/Bookings'
import Gallery from '@/components/Gallery'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/BookSession',
      name: 'Book A Session',
      icon: '',
      component: Bookings
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      icon: '',
      component: Gallery
    },
    {
      path: '/About',
      name: 'About',
      icon: '',
      component: About
    }
  ]
})

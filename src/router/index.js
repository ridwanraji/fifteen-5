import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bookings from '@/components/Bookings'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Admin from '@/components/Admin'
import SignIn from '@/components/SignIn'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/Home',
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
      path: '/About-Us',
      name: 'About Us',
      icon: 'account_box',
      component: About
    },
    {
      path: '/Contact-Us',
      name: 'Contact Us',
      icon: 'phone',
      component: Contact
    },
    {
      path: '/Admin',
      icon: 'person',
      component: Admin
    },
    {
      path: '/SignIn',
      component: SignIn
    }
  ],
  mode: 'history'
})

export default router

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, { theme: {
  primary: '#FFCA28',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.silent = false
Vue.config.performance = true
Vue.config.productionTip = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDCWlH2QByZ-HC12CNYksxcHY7IPpOhQVk',
      authDomain: 'rilly-visuals.firebaseapp.com',
      databaseURL: 'https://rilly-visuals.firebaseio.com',
      projectId: 'rilly-visuals',
      storageBucket: ''
    })
    this.$store.dispatch('loadAllBooking')
  }
})

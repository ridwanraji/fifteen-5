import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadBooking: [
      {
        first: 'Ridwan',
        last: 'Raji',
        age: 24,
        city: 'Saskatoon',
        province: 'Saskatchewan',
        shootType: 'Fashion',
        date: null,
        time: null,
        email: 'ror716@mail.usask.ca',
        phone: '306142057',
        instagram: 'rilly2000',
        facebook: 'ridwanraji',
        twitter: 'rilly2000',
        contact: 'instagram',
        bio: 'This is just a test info'
      },
      {
        first: 'Segun',
        last: 'Raji',
        age: 24,
        city: 'Saskatoon',
        province: 'Saskatchewan',
        shootType: 'Fashion',
        date: null,
        time: null,
        email: 'ror716@mail.usask.ca',
        phone: '306142057',
        instagram: 'rilly2000',
        facebook: 'ridwanraji',
        twitter: 'rilly2000',
        contact: 'instagram',
        bio: 'This is just a test info'
      }
    ],
    loadHomeCarouselData: [
      {title: 'Rilly Visuals', src: 'https://wallpaperbrowse.com/media/images/5ZydGd0.jpg', text: 'Photographer | Videographer | Graphic Designer'},
      {title: 'Rilly Visuals', src: 'https://wallpaperbrowse.com/media/images/LCQxACR.jpg', text: 'Photographer | Videographer | Graphic Designer'},
      {title: 'Rilly Visuals', src: 'https://wallpaperbrowse.com/media/images/wp-image-59632011-random-picture.jpg', text: 'Photographer | Videographer | Graphic Designer'}
    ],
    loadGalleryImages: [
      {src: require('@/assets/Bridge1.png')},
      {src: require('@/assets/KAT.jpg')},
      {src: require('@/assets/KAT1.jpg')},
      {src: 'https://wallpaperbrowse.com/media/images/5ZydGd0.jpg'}
    ],
    user: null,
    isloading: false,
    error: null
  },
  mutations: {
    createBooking (state, payload) {
      state.loadBooking.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.isloading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state, payload) {
      state.error = null
    }
  },
  actions: {
    loadAllBooking ({commit}) {
      firebase.database().ref('bookings').once('value')
    },
    createBooking ({commit}, payload) {
      const booking = {
        first: payload.first,
        last: payload.last,
        age: payload.age,
        city: payload.city,
        province: payload.province,
        shootType: payload.shootType,
        date: payload.date,
        time: payload.time,
        email: payload.email,
        phone: payload.phone,
        instagram: payload.instagram,
        facebook: payload.facebook,
        twitter: payload.twitter,
        contact: payload.contact,
        bio: payload.bio
      }
      firebase.database().ref('bookings').push(booking)
      .then((data) => {
        console.log(data)
        commit('createBooking', booking)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    signUserIn ({commit}, payload) {
      commit('isLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('isLoading', false)
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('isLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    }
  },
  getters: {
    loadHomeCarouselData (state) {
      return state.loadHomeCarouselData
    },
    loadBooking (state) {
      return state.loadBooking
    },
    loadGalleryImages (state) {
      return state.loadGalleryImages
    },
    user (state) {
      return state.user
    }
  }
})

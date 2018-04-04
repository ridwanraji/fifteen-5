import Vue from 'vue'
import Vuex from 'vuex'

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
    ]
  },
  mutations: {
    createBooking (state, payload) {
      state.loadBooking.push(payload)
    }
  },
  actions: {
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
      commit('createBooking', booking)
    }
  },
  getters: {
    loadHomeCarouselData (state) {
      return state.loadHomeCarouselData
    },
    loadBooking (state) {
      return state.loadBooking
    }
  }
})

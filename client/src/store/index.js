import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    username: '',
    status: '',
    image: '',
    pricelist: '',
    testimoni: ''
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.login = payload
    },
    SET_USERNAME (state, payload) {
      state.username = payload
    },
    SET_STATUS (state, payload) {
      state.status = payload
    },
    SET_IMAGE (state, payload) {
      state.image = payload
    },
    SET_PRICELIST (state, payload) {
      state.pricelist = payload
    },
    SET_TESTIMONI (state, payload) {
      state.testimoni = payload
    }
  },
  actions: {
    fetchTestimoni ({ commit }) {
      axios({
        method: 'GET',
        url: 'service/testimoni/top',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_TESTIMONI', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchPricelist ({ commit }) {
      axios({
        method: 'GET',
        url: 'service/pricelist/top',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_PRICELIST', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchImageHome ({ commit }) {
      axios({
        method: 'GET',
        url: 'homepage/top',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_IMAGE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchImageAbout ({ commit }) {
      axios({
        method: 'GET',
        url: 'about/top',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_IMAGE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchImagePortofolio ({ commit }) {
      axios({
        method: 'GET',
        url: 'portofolio/top',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_IMAGE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchImageService ({ commit }) {
      axios({
        method: 'GET',
        url: 'service/top',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_IMAGE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login ({ commit }, payload) {
      return axios.post('admin/login', payload)
    },
    verify ({ commit }) {
      axios.get('admin/verify', {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_USERNAME', data.username)
          commit('SET_STATUS', data.status)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})

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
    dataImage: '',
    pricelist: '',
    pricelistAll: '',
    testimoni: '',
    testimoniAll: '',
    page: ''
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
    SET_PRICELISTALL (state, payload) {
      state.pricelistAll = payload
    },
    SET_TESTIMONI (state, payload) {
      state.testimoni = payload
    },
    SET_TESTIMONIALL (state, payload) {
      state.testimoniAll = payload
    },
    SET_PAGE (state, payload) {
      state.page = payload
    },
    SET_DATAIMAGE (state, payload) {
      state.dataImage = payload
    }
  },
  actions: {
    addAdmin ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: 'admin/register',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    deleteAdmin ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: `admin/register/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    addPricelist ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: 'service/pricelist',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    deletePricelist ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: `service/pricelist/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    addTestimoni ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: 'service/testimoni',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    deleteTestimoni ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: `service/testimoni/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    addImageHome ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: 'homepage',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    deleteImageHome ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: `homepage/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    addImagePortofolio ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: 'portofolio',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    deleteImagePortofolio ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: `portofolio/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    addImageAbout ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: 'about',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    deleteImageAbout ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: `about/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    addImageService ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: 'service',
        data: payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    deleteImageService ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: `service/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    fetchAdminAll ({ commit }) {
      axios({
        method: 'GET',
        url: 'admin/all',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_DATAIMAGE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchImageHomeAll ({ commit }) {
      axios({
        method: 'GET',
        url: 'homepage',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_DATAIMAGE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchImageAboutAll ({ commit }) {
      axios({
        method: 'GET',
        url: 'about',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_DATAIMAGE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchImagePortofolioAll ({ commit }) {
      axios({
        method: 'GET',
        url: 'portofolio',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_DATAIMAGE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchImageServiceAll ({ commit }) {
      axios({
        method: 'GET',
        url: 'service',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_DATAIMAGE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchTestimoniAll ({ commit }) {
      axios({
        method: 'GET',
        url: 'service/testimoni',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_TESTIMONIALL', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchPricelistAll ({ commit }) {
      axios({
        method: 'GET',
        url: 'service/pricelist',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_PRICELISTALL', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
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

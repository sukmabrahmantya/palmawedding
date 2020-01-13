import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    username: '',
    status: ''
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
    }
  },
  actions: {
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
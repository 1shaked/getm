import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    user_name : null,
    password : null,
  },
  getters : {
    IsLogedIn : (state) =>
    {
      return state.user_name != null && state.password != null
    }
  },
  mutations: {

  },
  actions: {

  }
})

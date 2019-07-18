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
    LogInM:(state , user) =>
    {
      console.log(`get req to check if the user is valid`);
      state.user_name = user.user_name;
      state.password  = user.password;
    }
  },
  actions: {
    LogIn({commit} , user)
    {
      commit('LogInM' , user);
    }
  }
})

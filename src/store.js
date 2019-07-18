import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    user_name : null,
    password : null,
    requests : [
      {
        tranfer_type : 'people',
        tranfer_carray : '4',
        comments : 'קצינים חדשים צריכים לעשות תופס טיולים יוצא',
        start_from : 'תל השומר',
        destination : 'צריפין',
        time : '2019-12-2',
        user_name : 'שקד',
        phone : '0585525255',
        mail : 'shaked1hen@gmail.com'
      },
      {
        tranfer_type : 'eqe',
        tranfer_carray : 'גדול',
        comments : 'ציוד סופר אקסטרה מסווג',
        start_from : 'עיר הבהדים',
        destination : 'קרייה',
        time : '2019-12-1',
        user_name : 'David',
        phone : '0526642723',
        mail : 'henDavid@gmail.com'
      },
      {
        tranfer_type : 'people',
        tranfer_carray : '2',
        comments : 'מפקדי קורס קצינים',
        start_from : 'גלילות',
        destination : 'שיטפון',
        time : '2019-12-2',
        user_name : 'משה',
        phone : '0542242933',
        mail : 'mosh@gmail.com'
      },
      {
        tranfer_type : 'eqe',
        tranfer_carray : 'גדול',
        comments : 'ציוד סופר אקסטרה מסווג',
        start_from : 'עיר הבהדים',
        destination : 'שיטפון',
        time : '2019-12-1',
        user_name : 'רותי',
        phone : '051224272',
        mail : 'RotiHagag@gmail.com'
      }
    ]
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

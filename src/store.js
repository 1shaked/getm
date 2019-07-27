/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');


Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user_name : null,
    password : null,
    user : {
      /*
        Email : 'someMail.com',
        Phone : '055005050',
        FirstName : 'myFname',
        LastName : 'LName',
        password : 'Password',
      */
    },
    chat : [
      {
        sender_id : 1,
        recevier_id : 0,
        msg : 'msg',
        time : '14:50'
      },
      {
        sender_id : 0,
        recevier_id : 1,
        msg : 'content',
        time : '14:53'
      }
    ],
    request_clicked_for_chat : {},
    requests : [
      {
        tranfer_type : 'people',
        tranfer_carray : '4',
        comments : 'קצינים חדשים צריכים לעשות תופס טיולים יוצא',
        start_from : 'תל השומר',
        destination : 'צריפין',
        time : '2019-12-2',
        FirstName : 'שקד',
        Phone : '0585525255',
        Email : 'shaked1hen@gmail.com'
      },
      {
        tranfer_type : 'eqe',
        tranfer_carray : 'גדול',
        comments : 'ציוד סופר אקסטרה מסווג',
        start_from : 'עיר הבהדים',
        destination : 'קרייה',
        time : '2019-12-1',
        FirstName : 'David',
        Phone : '0526642723',
        Email : 'henDavid@gmail.com'
      },
      {
        tranfer_type : 'people',
        tranfer_carray : '2',
        comments : 'מפקדי קורס קצינים',
        start_from : 'גלילות',
        destination : 'שיטפון',
        time : '2019-12-2',
        FirstName : 'משה',
        Phone : '0542242933',
        Email : 'mosh@gmail.com'
      },
      {
        tranfer_type : 'eqe',
        tranfer_carray : 'גדול',
        comments : 'ציוד סופר אקסטרה מסווג',
        start_from : 'עיר הבהדים',
        destination : 'שיטפון',
        time : '2019-12-1',
        FirstName : 'רותי',
        Phone : '051224272',
        Email : 'RotiHagag@gmail.com'
      }
    ]
  },
  getters : {
    IsLogedIn : (state) =>
    {
      return Object.keys(state.user).length != 0;
    }
  },
  mutations: {
    LogInM:(state , user) =>
    {
      console.log(`get req to check if the user is valid`);
      let params =  {FirstName : user.user_name , Password : user.password};
      axios.get('/api/rides/get/user' , {params})
      .then(respond =>
        {
          console.log(respond);
          if (respond.data.length > 0)
          {
            Vue.set(state , 'user' , respond.data[0]);
          }
          else
          {
            Vue.set(state , 'user' , {});
          }
        });
      //state.user_name = user.user_name;
      //state.password  = user.password;
    },
    OpenRequestM:(state , request) =>
    {
      console.log(`Open request to ride`);
      //TODO:add the part where i get mail and password
      //TODO:send axios post requst
      console.log(request);
      
      let request_deatils = {
        FirstName : state.user.FirstName,
        tranfer_type : request.tranfer_type,
        carry : request.carry,
        comments : request.comments,
        destination : request.destination,
        start_from : request.start_from,
        Email : state.user.Email,
        Phone : state.user.Phone
      };

      let data_to_server = {
        tranfer_type : request.tranfer_type,
        carry : request.carry,
        comments : request.comments,
        destination : request.destination,
        start_from : request.start_from,
        ID : state.user.ID
      };

      axios.post('/api/rides/posts/new_requst' , data_to_server)
      .then(respond =>
        {
          console.log(respond);
        });
      state.requests.push(request_deatils);
    },
    SignUpM:(state , user) =>
    {
      console.log(user);
      axios.post('/api/rides/posts/new_user' , user)
      .then(respond => 
        {
          console.log(respond);
          if (respond.status == 200)
          {
            Vue.set(state  , 'user' , user);
            state.user_name = user.FirstName;
            state.password = user.Password;
          }
        });
    },
    GetRequestRidesM:(state) =>
    {
      axios.get('/api/rides/get/requests')
      .then(respond =>
        {
          console.log(respond);
          Vue.set(state , 'requests' , respond.data);
        });
    },
    CreateRouteM:(state , route_deatils) =>
    {
      console.log(route_deatils);

      axios.post('/api/rides/posts/new_rides' , route_deatils)
      .then(respond =>
        {
          console.log(respond);
        });
    },
    SendChatM:(state , msg_object) =>
    {
      console.log(msg_object);
      
      state.chat.push(msg_object);
      //TODO: axios post request to send
    }
  },
  actions: {
    LogIn({commit} , user)
    {
      commit('LogInM' , user);
    },
    OpenRequest({commit} , request)
    {
      commit('OpenRequestM' , request);
    },
    SignUp({commit} , user)
    {
      commit('SignUpM' , user);
    },
    GetRequestRides({commit})
    {
      commit('GetRequestRidesM');
    },
    CreateRoute({commit , state} , route_deatils)
    {
      route_deatils['ID'] = state.user.ID;
      commit('CreateRouteM' , route_deatils);
    },
    SendChat({commit , state} , msg)
    {
      let recevier_id = state.request_clicked_for_chat.ID;
      let sender_id = state.user.ID;
      console.log(recevier_id);
      console.log(sender_id);
      let msg_object = {
        recevier_id,
        sender_id,
        msg
      }
      commit('SendChatM' , msg_object);
    },
    ChooseChat({state}  , request_deatils)
    {
      Vue.set(state , 'request_clicked_for_chat' , request_deatils);
    }
  }
})

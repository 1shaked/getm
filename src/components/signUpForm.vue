<template>
            <div id="app">
        <v-app id="inspire">
            <v-form
            ref="form"
            lazy-validation
            >
            <v-text-field
                v-model="name"
                :counter="10"
                label="שם פרטי"
                required
            ></v-text-field>
            <v-text-field
                v-model="last_name"
                label="שם משפחה"
                required
            ></v-text-field>
            <v-text-field
                v-model="phone"
                label="מספר טלפון"
                required
            ></v-text-field>
            <v-text-field
                v-model="id_number"
                label="מספר אישי"
                required
            ></v-text-field>
            <v-text-field
                v-model="mail"
                label="מייל"
                required
            ></v-text-field>
            <v-text-field
            :type="'password'"
            v-model="password"
            label="password Name Exe"
            ></v-text-field>
          <v-btn color="success" block
          v-on:click="SignUpToSys">הרשם</v-btn>
            </v-form>
        </v-app>
        </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex';
export default {
  data () {
    return {
      drawer: false,
      vehicles: ['משאית', 'טנדר', 'רגיל'],
      bases: ['שיטפון', 'צריפין', 'קרייה', 'תל השומר', 'גלילות'],
      type: 'month',
      start: '',
      name : '',
      last_name : '',
      phone : null,
      id_number : null,
      sys_id : null,
      vehicle : null,
      starting_place : null,
      destination : null,
      mail : null,
      password : null
    }
  },
  methods: {
    ...mapActions([
      'SignUp'
    ]),
    SignUpToSys()
    {
      let ID = this.id_number;
      let FirstName = this.name;
      let LastName = this.last_name;
      let Email = this.mail;
      let Phone = this.phone;
      let Password = this.password;
      let user_object = {ID , FirstName , LastName , Email , Phone , Password};
      this.SignUp(user_object);
      this.$router.push({ path: '/' });
    }
  },
}
</script>

<style scoped>
.navObj{
    color: #fff;
}
.link {
    font-size: 25px;
    color: black;

}
</style>

<template>
<v-app>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md4>
          <h2>שם משתמש</h2>
        </v-flex>
        <v-flex xs12 md8>
          <v-text-field
            v-model="user_name"
            label="User Name Exe"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md4>
          <h2>סיסמא</h2>
        </v-flex>
        <v-flex xs12 md8>
          <v-text-field
          :type="'password'"
          v-model="password"
          label="password Name Exe"
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-btn v-on:click="LogInUser">
            כניסה
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</v-app>
</template>

<script>
/* eslint-disable */
import { mapActions, mapState , mapGetters} from 'vuex'
export default {
  data () {
    return {
      user_name : null,
      password : null
    }
  },
  methods: {
    ...mapActions([
        'LogIn'
    ]),
    LogInUser()
    {
      let user_name = this.user_name;
      let password = this.password
      //alert(`loged in ${user_name} and ${password}`);
      this.$router.push({ path: '/' });
      this.LogIn({user_name , password})
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

<template>
  <v-app>
      <v-container>
          <v-responsive>
                <v-container fill-height>
                <v-layout align-center>
                    <v-flex>
                        <h3 class="display-3">GetM</h3>
                        <span class="subheading">להגיע לבסיס / לעבור ממקום למקום זו האפליקציה בישבילכם!!!</span>
                        <v-divider class="my-3"></v-divider>
                        <div class="title mb-3"></div>
                        <router-link to="/login">
                            <v-btn>
                                <div class="link">כניסה</div>
                            </v-btn>
                        </router-link>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-responsive>
          <v-layout row wrap align-center justify-center>
              <v-flex xs12 v-if="IsLogedIn">
                  <HelloUser />
              </v-flex>
              <v-flex xs12 md8 v-if="!IsLogedIn">
                  <!--open req nav-->
                  <v-btn block color='cyan lighten-2'
                  class="button"
                   to="/sign_up">
                      הרשמה
                  </v-btn>
              </v-flex>
              <v-flex xs12 md8>
                  <!--req in prograss nav-->
                  <v-btn color='deep-orange lighten-3' block class="button"
                  v-on:click="GetRides">
                      בקשות בתהליך
                  </v-btn>
              </v-flex>
              <v-flex xs12 md8 v-if="IsLogedIn">
                  <!--open req nav-->
                  <v-btn block color='cyan lighten-5'
                  class="button"
                   to="/open_req">
                      יצירת בקשה
                  </v-btn>
              </v-flex>
              <v-flex xs12 md8 v-if="IsLogedIn">
                  <!--open req nav-->
                  <v-btn block color='cyan lighten-4'
                  class="button"
                   to="/new_routes">
                      יצירת נסיעה
                  </v-btn>
              </v-flex>
              <v-flex xs12 md8>
                  <!-- היכל התהילה -->
                  <v-btn block color='cyan lighten-4'
                  class="button"
                  v-on:click="GloryState">
                        היכל התהילה
                  </v-btn>
              </v-flex>
              <v-flex xs12 md8 v-if="IsLogedIn">
                  <OptionalRides></OptionalRides>
              </v-flex>
          </v-layout>
      </v-container>
  </v-app>
</template>
<script>
/* eslint-disable */
import { mapActions, mapState , mapGetters} from 'vuex'
import HelloUser from './HelloUser'
import OptionalRides from './OptionalRides'
export default {
    components : {
        HelloUser
        ,OptionalRides
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions([
            'GetRequestRides',
            'GetGloryState'
        ]),
        GetRides()
        {
            this.GetRequestRides();
            this.$router.push({ path: 'requested_rides' });
        },
        GloryState()
        {
            this.GetGloryState();
            this.$router.push({ path: 'glory_state' });
        }
    },
    computed: {
        ...mapGetters([
            'IsLogedIn'
        ]),
    },
}
//this.$router.push({ path: 'StudentProfile' });
</script>
<style scoped>
.button {
    height: 65px;
    font-size: 35px;
}
</style>

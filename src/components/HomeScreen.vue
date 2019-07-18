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
                            <v-brn>
                                <div class="link">הרשמה</div>
                            </v-brn>
                        </router-link>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-responsive>
          <v-layout row wrap align-center justify-center>
              <v-flex xs12 md8>
                  <!--open req nav-->
                  <v-btn block color='cyan lighten-2'
                  class="button"
                   to="/login">
                      הרשמה
                  </v-btn>
              </v-flex>
              <v-flex xs12 md8>
                  <!--req in prograss nav-->
                  <v-btn color='deep-orange lighten-3' block class="button">
                      בקשות בתהליך
                  </v-btn>
              </v-flex>
              <v-flex xs12 md8>
                  <!--open req nav-->
                  <v-btn block color='cyan lighten-5'
                  class="button"
                   to="/open_req">
                      יצירת בקשה
                  </v-btn>
              </v-flex>
          </v-layout>
      </v-container>
  </v-app>
</template>
<script>
/* eslint-disable */
export default {
    components : {
    },
    data() {
        return {
        }
    },
    methods: {
        
    },
    computed: {
        
    },
}
</script>
<style scoped>
.button {
    height: 65px;
    font-size: 35px;
}
</style>

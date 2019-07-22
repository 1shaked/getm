<template>
    <div id="app">
        <v-app id="inspire">
            <v-container>
                <v-select
                    :items="PeopleThatCanGo"
                    label="כמות האנשים"
                    v-model="tranfer_carray"
                ></v-select>
                <v-text-field
                    label="הערות"
                    placeholder="comments"
                    v-model="comments"
                ></v-text-field>
                <v-select
                :items="bases"
                label="מקום יציאה"
                solo
                v-model="start_from"
              ></v-select>
              <v-select
                :items="bases"
                label="מקום הגעה"
                solo
                v-model="destination"
              ></v-select>
                <br>
                <v-btn
                v-on:click="CreateTranferPeople">:הבא <v-icon>next_week</v-icon></v-btn>
            </v-container>
        </v-app>
    </div>
</template>
<script>
/* eslint-disable */
import { mapActions } from 'vuex'
export default {
  data () {
    return {
        PeopleThatCanGo : Array.from({length: 9}, (v, k) => k+1),
        bases: ['שיטפון', 'צריפין', 'קרייה', 'תל השומר', 'גלילות'],
        tranfer_carray : null,
        comments : null,
        start_from : null,
        destination : null
    }
  },
  methods: {
      ...mapActions([
      'OpenRequest'
    ]),
    CreateTranferPeople()
    {
      let tranfer_type = 'people';
      let carry = this.tranfer_carray;
      let comments = this.comments;
      let start_from = this.start_from;
      let destination = this.destination;
      let request_details = {tranfer_type , carry , comments , start_from  , destination}
      this.OpenRequest(request_details);
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

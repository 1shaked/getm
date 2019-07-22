<template>
    <div id="app">
        <v-app id="inspire">
            <v-container>
                <v-text-field
                    label="הערות"
                    placeholder="comments"
                    v-model="comments"
                ></v-text-field>
                <v-select
                    :items="ShipmentSizes"
                    label="גודל המשלוח"
                    v-model="tranfer_carray"
                ></v-select>
                <v-select
                :items="bases"
                label="מקום יציאה"
                v-model="start_from"
                solo
              ></v-select>
              <v-select
                :items="bases"
                label="מקום הגעה"
                v-model="destination"
                solo
              ></v-select>
                <br>
                <v-btn
                v-on:click="CreateTranferEqe">:הבא <v-icon>next_week</v-icon></v-btn>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
/* eslint-disable */
export default {
  data () {
    return {
      drawer: false,
      ShipmentSizes : ['קטן' , 'בנוני' , 'גדול'],
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
    CreateTranferEqe()
    {
      let tranfer_type = 'eqe';
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
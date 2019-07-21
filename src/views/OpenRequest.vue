<template>
  <div class="open_req">
    <v-container>
      <h2>transfer {{transfer}}</h2>
        <v-card dark color="secondary">
                <v-btn color="success"  v-on:click="transfer = 'people'">אנשים</v-btn>
        </v-card>
        <v-card dark color="secondary">
                <v-btn color="info" v-on:click="transfer = 'eqe'">ציוד</v-btn>
        </v-card>
        <hr>
        <v-layout row wrap>
          <v-flex xs12 md8>
            <v-container>
              <TransferPeople v-if="transfer == 'people'"></TransferPeople>
              <TranferEqe v-else-if="transfer == 'eqe'"></TranferEqe>
            </v-container>
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>
<script>
import TransferPeople from '../components/transfer_people'
import TranferEqe from '../components/tranfer_eqe'
/* eslint-disable */
export default {
    components : {
      TransferPeople,
      TranferEqe
    },
    data() {
        return {
            transfer : null,
            bases: ['שיטפון', 'צריפין', 'קרייה', 'תל השומר', 'גלילות']
        }
    },
    methods: {
        
    },
    computed: {
        
    },
}
</script>

<style scoped>
.open_req {
  margin: 2%  10%
  
}
</style>

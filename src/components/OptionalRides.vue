<template>
    <v-container>
        <v-btn v-on:click="GetRides">
           צפה בנסיעות אופציונליות
        </v-btn>
        <h2>סמן אם הנסיעה אושרה</h2>
        <v-layout row wrap>
            <v-flex>
                <v-container v-for="(ride , index) in rides_to_approve" :key="index">
                    מ{{ ride.start_from }}
                    ל{{ ride.destination }}
                    בשעה
                    {{ ride.requst_time }}
                    על ידי
                    {{ ride.driver_name }}
                    <v-btn
                    v-on:click="FinshRide(ride , index)"
                    color="primary"
                    depressed large>
                        אשר נסיעה
                    </v-btn>
                </v-container>
            </v-flex>
            <v-flex>

            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
/* eslint-disable */

import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions([
            'GetRidesToApprove'
            ,'CloseRequest'
        ]),
        GetRides()
        {
            this.GetRidesToApprove();
        },
        FinshRide(request , index)
        {
            request['index'] = index;
            this.CloseRequest(request)
        }
    },
    computed: {
        ...mapState([
            'rides_to_approve'
        ])
    },
}
</script>
<style scoped>
.container {
    border :1px solid red;
}
</style>

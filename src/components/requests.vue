<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-list two-line>
                    <template v-for="(item, index) in requests">
                        <v-list-tile v-on:click="ChooseReques(item)"
                        :key="index"
                        avatar
                        >
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <!--v-html="item.tranfer_carray"-->
                                {{ item.FirstName }}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>
                                <span v-if="item.tranfer_type == 'eqe'">ציוד</span>
                                <span v-else-if="item.tranfer_type == 'people'">
                                    אנשים
                                </span>
                                -- {{ item.carry }}
                                <div></div>
                                מ{{ item.start_from }} : ל{{ item.destination }}
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                        </v-list-tile>
                    </template>
                    </v-list>
                </v-card>
            </v-flex>
            <!--chosen reques-->
            <v-flex xs12 sm6>
                <v-card dark>
                    <v-card-title>
                        <span v-if="Chosen_request.tranfer_type == 'eqe'">מבקש להעביר ציוד {{Chosen_request.FirstName}} </span>
                        <span v-else-if="Chosen_request.tranfer_type == 'people'">מבקש להעביר אנשים {{Chosen_request.FirstName}} </span>
                    </v-card-title>
                    <v-card-text>
                        הגודל של המשלוח הוא : {{ Chosen_request.carry }}
                        <br>
                        הנסיעה היא מ{{Chosen_request.start_from}} עד {{Chosen_request.destination}}
                        <br>
                        מסר מהנוסע : {{ Chosen_request.comments }}
                        <br>
                        מספר טלפון - {{ Chosen_request.Phone }}
                        <br>
                        מייל - {{ Chosen_request.Email }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn>
                            צור קשר
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 md8>
                <chat></chat>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
/* eslint-disable */
import { mapActions, mapState , mapGetters} from 'vuex'
import chat from './chat.vue';
export default {
    data() {
        return {
            Chosen_request : {
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
        }
    },
    methods: {
        ...mapActions([
            'ChooseChat'
        ]),
        ChooseReques(request)
        {
            this.Chosen_request = request;
            console.log(`request has chosen`);
            this.ChooseChat(request);
        }
    },
    computed: {
        ...mapState([
            'requests'
        ]),
        Request()
        {
            return this.Chosen_request
        }
    },
    components : {
        chat
    }
    
}
</script>
<style scoped>

</style>

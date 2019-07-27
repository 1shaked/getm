<template>
    <v-app>
        <v-container>
            <v-responsive>
                <v-container fill-height>
                <v-layout align-center>
                    <v-flex>
                        <div class="title mb-3">בעמוד זה אתם עוזרים לאנשים ורושמים את מסלולי הנסיעה הקבועים שלכם</div>
                        <v-divider class="my-3"></v-divider>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-responsive>
            <v-form
            ref="form"
            lazy-validation
            >
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
                <v-text-field
                    v-model="car"
                    label="רכב"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="supplier_symbol"
                    label="סימול אפנסנאי"
                    required
                ></v-text-field>
                <v-btn v-on:click="Create">
                    צור
                </v-btn>
            </v-form>
        </v-container>
    </v-app>
</template>
<script>
/* eslint-disable */
import { mapActions, mapState , mapGetters} from 'vuex'
export default {
    data() {
        return {
            start_from : null,
            destination : null,
            supplier_symbol : null,
            car : null,
            bases: ['שיטפון', 'צריפין', 'קרייה', 'תל השומר', 'גלילות']
        }
    },
    components : {

    },
    methods: {
        ...mapActions([
            'CreateRoute'
        ]),
        Create()
        {
            let route_deatils = {
                start_from : this.start_from,
                destination : this.destination,
                supplier_symbol : this.supplier_symbol,
                car : this.car
            };
            this.CreateRoute(route_deatils);
            this.$router.push({ path: '/' });
        }
    },
    computed: {
        
    },
}
</script>
<style scoped>

</style>

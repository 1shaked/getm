<template>
    <v-container>
        <v-responsive>
                <v-container fill-height>
                <v-layout align-center>
                    <v-flex>
                        <h3 class="display-2">שלום -- {{ user.FirstName }}</h3>
                        <span class="subheading">מקווה שתמצא את הטרמפ שאתה מחפש במהרה או שתעשה טובה למישהו</span>
                        <v-divider class="my-3"></v-divider>
                        <div class="title mb-3"></div>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-responsive>
    </v-container>
</template>
<script>
/* eslint-disable */
import { mapActions, mapState , mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        ...mapState([
            'user'
        ])
    },
}
</script>
<style scoped>

</style>

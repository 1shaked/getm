<template>
    <v-app>
        <v-container>
            <v-responsive>
                <v-container fill-height>
                <v-layout align-center>
                    <v-flex>
                        <h3 class="display-3">GetM</h3>
                        <span class="subheading">פה תמצאו את כל הבקשות של אנשים למעבר</span>
                        <v-divider class="my-3"></v-divider>
                        <div class="title mb-3"></div>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-responsive>
            <requests />
        </v-container>
    </v-app>
</template>
<script>
/* eslint-disable */
import { mapActions, mapState , mapGetters} from 'vuex'
import requests from './../components/requests'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
        
    },
    components : {
        requests
    }
}
</script>
<style scoped>

</style>

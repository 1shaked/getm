<template>
    <v-app>
        <v-container>
            <v-container class="winners" v-for="(place , index) in glory_state" :key="index">
                במקום ה {{ index + 1 }}
                עם 
                {{ place.driving_did }}
                נסיעות.
                שמו הוא :  
                {{ place.FirstName }}
            </v-container>
        </v-container>
    </v-app>
</template>
<script>
/* eslint-disable */
import { mapActions, mapState , mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState([
            'glory_state'
        ])
    },
    methods: {
        
    },
}
</script>
<style scoped>
.winners {
    border : 1px solid red;
    font-size: 3em;
}
</style>

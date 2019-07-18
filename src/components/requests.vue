<template>
    <v-container>
        {{ requests }}
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
            'requests'
        ])
    },
    
}
</script>
<style scoped>

</style>

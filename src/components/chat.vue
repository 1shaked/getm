<template>
    <v-container>
        <v-responsive>
                <v-container fill-height>
                <v-layout align-center>
                    <v-flex>
                        <span class="subheading">צא'ט</span>
                        <v-divider class="my-3"></v-divider>
                    </v-flex>
                </v-layout>
                </v-container>
            </v-responsive>
            <v-text-field
            label="הודעה חדשה"
            v-model="new_msg"></v-text-field>
            <v-btn v-on:click="send">
                שלח
            </v-btn>
            <v-layout row wrap align-center>
                <v-flex xs12 style="border: 1px solid red"
                v-for="msg in chat" :key="msg.time">
                <v-container>
                    {{ msg.msg }}
                    <v-spacer></v-spacer>
                    {{ msg.time }}
                </v-container>
                </v-flex>
            </v-layout>
    </v-container>
</template>
<script>
/* eslint-disable */
//this.$router.push({ path: 'StudentProfile' });
import { mapActions, mapState , mapGetters} from 'vuex'
export default {
    data() {
        return {
            new_msg : null
        }
    },
    methods: {
        ...mapActions([
            'SendChat'
        ]),
        send()
        {
            //alert(this.new_msg);
            if (this.new_msg != '' || this.new_msg != null)
            {
                this.SendChat(this.new_msg);
            }
            this.new_msg = '';
        }
    },
    computed: {
        ...mapState([
            'chat',
            'request_clicked_for_chat'
        ])
    },
}
</script>
<style scoped>

</style>

<template>
    <div>
                <!--
                <b-nav-item><router-link to="/" class="navObj">Home</router-link></b-nav-item>
                <b-nav-item><router-link to="/about" class="navObj">About</router-link></b-nav-item>
                <v-spacer></v-spacer>
                <b-nav-item><router-link to="/login" class="navObj">log in</router-link></b-nav-item>
                -->
                <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-navigation-drawer app v-model="drawer" class="blue lighten-5">
                <router-link to="/">
                    <div class="link">בית</div>
                </router-link>
                <router-link to="/login">
                    <div class="link">הרשמה</div>
                </router-link>
                <router-link to="/open_req">
                    <div class="link">פתיחת בקשה</div>
                </router-link>
            </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
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

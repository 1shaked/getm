<template>
  <v-app>
    <v-content>
      <!--
        <navBar></navBar>
      -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld'
import navBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    navBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style scoped>
#nav-bar{
  text-align: center;
  background-color: lightblue;
}

</style>


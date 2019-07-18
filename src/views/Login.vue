<template>
  <div class="login">
    <v-container>
        <h1>יצירת נסיעה</h1>
        <!--The LOG in Form will go here-->
        <LogIn />
    </v-container>
  </div>
</template>
<script>
/* eslint-disable */
import LogIn from '../components/LogInForm'
export default {
    components : {
      LogIn
    }
}
</script>
<style scoped>
.login {
  margin: 2%  10%
  
}
</style>

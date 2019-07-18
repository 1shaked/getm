<template>
  <div class="login">
    <v-container>
        <h1>יצירת נסיעה</h1>
        <!--The signUpForm in Form will go here-->
        <signUpForm />
    </v-container>
  </div>
</template>
<script>
/* eslint-disable */
import signUpForm from '../components/signUpForm'
export default {
    components : {
      signUpForm
    }
}
</script>
<style scoped>
.login {
  margin: 2%  10%
  
}
</style>

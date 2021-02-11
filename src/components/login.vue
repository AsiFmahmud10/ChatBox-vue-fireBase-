<template>
  <div >
     <form @submit.prevent = "logedIn">
    <input type="text" required placeholder="Email :" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
   
    <button>Login</button>
    <p style="color : red">{{error}}</p>
  </form>
  </div>
</template>

<script>
import { ref } from "vue";
import {useLogin} from "../composables/login"
export default {
  setup() {

 const {error, login} = useLogin()
    const email = ref("");
    const password = ref("");
    const logedIn = async()=>{
        await login(email.value, password.value)
    }
    if(!error.value){
       console.log('thre is no error')
    }
    return { email, password, logedIn,error};
  },
};
</script>

<style scoped>
</style>

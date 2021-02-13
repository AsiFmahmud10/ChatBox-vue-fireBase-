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
  setup(props, context) {

 const {error, login} = useLogin()

    const email = ref("");
    const password = ref("");

    const logedIn = async()=>{
        await login(email.value, password.value)
        console.log("i am logged in")
         if(!error.value){
         context.emit("login");
    }
    }
   
    return { email, password, logedIn,error};
  },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
input{
  width: 100%;
}
</style>

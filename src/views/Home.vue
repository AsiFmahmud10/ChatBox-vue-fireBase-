<template>
<div class="container">
<div v-if="showLogin"   >
    <login />
    <p>No account yet ? <span @click="showLogin = !showLogin"> Signup </span> instead</p> 
    </div>
<div v-else>
    <signup/>
    <p>Already have account ? <span @click="showLogin = !showLogin"> Login </span> instead</p> 
</div>
 </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/login.vue'
import signup from '@/components/signup.vue'
import { ref } from 'vue'
export default {
  name: 'Home',
  components: {
   login,signup
  },

  setup(props) {
      const showLogin = ref(true)
     
      return {showLogin,}
  }
}
</script>
<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
span{
  cursor: pointer;
  font-weight: bold;
}
p{
  padding: 10px;
  text-align: left;
  color: rgb(143, 139, 139);
}

</style>
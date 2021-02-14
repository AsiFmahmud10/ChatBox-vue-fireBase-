<template>
  <nav v-if="user">
 <div class="flex">
        <p>Hi {{user.displayName}}</p> 
        <p>{{user.email}}</p>
<button @click="handleClick">Log Out</button>

</div>        
  </nav>
</template>

<script>
import {useLogout} from '../composables/logout' 
import getUser from "../composables/user.js"
import { watch } from 'vue'
export default {
  setup(props, context){
    const {error,logOut} = useLogout();
    const user = getUser()
    const handleClick = async()=>{
      await logOut()
    
  }
  
       
  
    return{handleClick,error,user}
  }
  
  }
</script>

<style>
nav{
    background: rgb(241, 239, 239);
    width: 90%;
    margin: auto;
    
}
nav p{
    color: #444;
    font-weight: bold;
}
 .flex{
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
</style>
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
    background: rgba(236, 234, 234, 0.911);
    width: 70%;
    margin: auto;
   box-shadow: 0px 0px 4px 0px rgb(189, 187, 187);
   border: 0px;
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
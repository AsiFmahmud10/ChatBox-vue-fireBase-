<template>
<div>
<Nav/>
 <Window/>
<messageBox/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import messageBox from '../components/chatForm'
import getUser from "../composables/user.js"
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import Window from '../components/chatWindow'
export default {
    components : {
        Nav, messageBox,Window
    },
  setup() {
      const router = useRouter()
       const user = getUser();
     
   watch(user, ()=>{
       console.log("watching")
       if(!user.value){
           router.push({name :"Home"})
       }
})

  }
}
</script>

<style scoped>
div{
  width: 70%;
  margin: auto;
 
  
}
</style>
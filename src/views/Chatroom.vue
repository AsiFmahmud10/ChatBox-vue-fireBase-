<template>
<div>
<Nav/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import getUser from "../composables/user.js"
import { useRouter } from 'vue-router'
import { watch } from 'vue'

export default {
    components : {
        Nav
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
    background: rgb(233, 236, 230);
}
</style>
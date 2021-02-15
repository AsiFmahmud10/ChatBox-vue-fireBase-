<template>
  <div>
    <form>
      <textarea
        placeholder="Type a message and hit Enter to send"
        v-model="_message"
        @keypress.enter.prevent="handleKeypress"
      >
      </textarea>
      {{err}}
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/user";
import { timeStamp } from "../firebase/config.js";
import useCollection from '../composables/useCollection'
export default {
  setup() {
    const user = getUser();
    const _message = ref("");
    const err =ref(null)
    const handleKeypress = async () => {
  
      const doc = {
        
        name: user.value.displayName,
        message: _message.value,
        date: timeStamp(),
      };

       const {error,addDoc} =useCollection('message', doc) //first this funcion will run and the pramtrs are going to be set  but the addDoc function will not execute/run  yet
      
         console.log('i am in')
         err.value = await  addDoc()  //now the addDoc will run
        _message.value=''
    };

   
    return { handleKeypress,err,_message };
  },
};
</script>

<style scoped>

form{
    background: rgb(243, 240, 240);
     margin: 3px 0px;
 
}
textarea{
    width: 90%;
    background: white;
    border-radius: 20px;
    padding: 5px;
    padding-left:10px ;
    outline: none;
     border-bottom:6px;
     }
</style>

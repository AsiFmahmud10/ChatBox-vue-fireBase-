import {ref} from 'vue'
import {p_fireauth} from '../firebase/config.js'
const error = ref(null)
const login = async (email, password)=>{
    try{
         const res = await p_fireauth.signInWithEmailAndPassword(email, password)
        error.value = null;
        }
    catch(err){
            error.value = err.message
    }
}
const useLogin =() =>{
      return {login, error}  
}

export {useLogin}
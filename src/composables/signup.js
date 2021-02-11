import {ref} from 'vue'
import {p_fireauth} from '../firebase/config.js'
const error = ref("null")

const signup = async (name,email,password)=>{
   
    try
    {
        const res = await  p_fireauth.createUserWithEmailAndPassword(email, password)
        if (!res){
            throw new Error('Unable to Create user')
        }
     await res.user.updateProfile({name})
     error.value = null
     return res
    }
    catch(err){
        error.value = err.message
    }
    
}

const useSignup = ()=>{

    return {error, signup}
}

export default useSignup
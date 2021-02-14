import {ref} from 'vue'
import {p_fireauth} from '../firebase/config.js'
const error = ref("null")

const signup = async ( displayName,email,password)=>{  // If we want to set the displayName of the uiser we must use displayName here 
    try
    {
        const res = await  p_fireauth.createUserWithEmailAndPassword(email, password)
        if (!res){
            throw new Error('Unable to Create user')
        }
     await res.user.updateProfile({displayName})  //and have to pass the parameter named display name. here display name contains the Name of the user 
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
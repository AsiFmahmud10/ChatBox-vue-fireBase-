import {ref} from 'vue'
import {p_fireauth} from '../firebase/config.js'

const error = ref("null")

const logOut = async ()=>{
    try{
        await p_fireauth.signOut();

    }
    catch(err)
    {
        error.value = err.message
    }
}
const useLogout = ()=>{
    return {error, logOut}

}

export {
    useLogout
}
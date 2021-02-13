import {ref} from 'vue'
import {p_fireauth} from '../firebase/config.js'

const user = ref(p_fireauth.currentUser)

p_fireauth.onAuthStateChanged((_user)=>{
     user.value = _user;
    console.log('user Change', _user)
})

const getUser =()=>{
    return user
}

export default getUser


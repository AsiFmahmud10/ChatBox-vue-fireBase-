import {ref} from 'vue'
import {p_firestore} from '../firebase/config.js'

const useCollection =  (collection, doc)=>{
    const error = ref(null)
    
    const addDoc = async()=>{
        
        try{
           p_firestore.collection(collection).add(doc)
           
        }
        catch(err){
            error.value = err.message; //error hoile user friendly dekhabe na, so
            error.value = "could not send the message"
        }
        return error.value
    }
    
    return {error,addDoc}
}

export default useCollection
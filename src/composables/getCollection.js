import {ref,watchEffect} from 'vue'
import {p_firestore} from '../firebase/config.js'

const getCollection = (collection)=>{
        const error = ref(null)
        const documents = ref(null)
       
        let collectionRef = p_firestore.collection(collection).orderBy('date') //snapshot of db comes and store in collection ref
        const  unsub = collectionRef.onSnapshot(( snap) => {    // if we create a new message then the information comes here and  the loop run . but doc.data().date = false  (as we need the date property which will be created by firestore in db)so nothing is going to be pushed inside the results..then when the date creates the foreach run again and  doc.data().date becomes true so  results.push executes
                console.log("snapping")
            let results = []
            snap.docs.forEach( (doc) => {
                  doc.data().date &&  results.push( {id: doc.id , ...doc.data()}) 
            });
          
            documents.value = results 
        }, (err)=>{
            documents.value = null ; 
            console.log(err.message)
            error.value = "could not fetch the data "
        })
        //if anything change inside the function it invokes
      watchEffect((onInvalidate )=>{
        onInvalidate(()=>{
            unsub()
        })

      })

        return { error, documents}

}

export default getCollection
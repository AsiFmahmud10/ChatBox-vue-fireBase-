import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATeSFVLakyURgtrEtm6OA867tlRF9lQ2c",
    authDomain: "todo-2d9ae.firebaseapp.com",
    projectId: "todo-2d9ae",
    storageBucket: "todo-2d9ae.appspot.com",
    messagingSenderId: "784177690028",
    appId: "1:784177690028:web:d2f7a7704d63cd0c4b7609"
  };

firebase.initializeApp(firebaseConfig);

  const p_firestore =firebase.firestore();
  const p_fireauth =firebase.auth();
 const timeStamp = firebase.firestore.FieldValue.serverTimestamp; //for time
  export { p_firestore, timeStamp,p_fireauth};
  //we use export when we want to use the exact name and more than one variable
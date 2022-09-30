
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'



const firebaseConfig = {

  apiKey: "AIzaSyAGjuhKw3OKBAiL-Jee2XBFH8uIU2bqe_k",

  authDomain: "reactjournalapp-51ebe.firebaseapp.com",

  projectId: "reactjournalapp-51ebe",

  storageBucket: "reactjournalapp-51ebe.appspot.com",

  messagingSenderId: "589640164490",

  appId: "1:589640164490:web:36cbf6903d1fe491377973"

};


// Initialize Firebase

const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB= getFirestore( FirebaseApp )
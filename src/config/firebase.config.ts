
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"




const firebaseConfig = {
  apiKey: "AIzaSyA0i46FB3LzGqgvG4aBLaupjPLnWU3reIo",
  authDomain: "e-commerce-e656a.firebaseapp.com",
  projectId: "e-commerce-e656a",
  storageBucket: "e-commerce-e656a.appspot.com",
  messagingSenderId: "267136656213",
  appId: "1:267136656213:web:06e3364a5af820c5cac5dc"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
  import {getStorage} from "firebase/storage";
  //import {getFirestore} from "firebase/storage"

 
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAkFqDJL6Cr45j4inD-rK2QunaQMyl0MJM",
    authDomain: "talk-c3451.firebaseapp.com",
    projectId: "talk-c3451",
    storageBucket: "talk-c3451.appspot.com",
    messagingSenderId: "744795884560",
    appId: "1:744795884560:web:a1b6d06b1adf6310f2ce95"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth();
 export const storage=getStorage();
 export const db=getFirestore();
 
import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAqbUYDgXBzGGiJ6qY4byctS8G_oMOe6eM",
    authDomain: "todo-319710.firebaseapp.com",
    projectId: "todo-319710",
    storageBucket: "todo-319710.appspot.com",
    messagingSenderId: "869881974006",
    appId: "1:869881974006:web:9388ec680ef1d69229b0d7",
    measurementId: "G-07EQVK8VD3"
  };


  const app = firebase.initializeApp(firebaseConfig);
  export const auth = app.auth(); 
  export const db = firebase.firestore();
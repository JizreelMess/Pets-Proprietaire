import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyBIVc3oiUOj34_l7FZYemFjA3WWdyLpiPI",
    authDomain: "petspro-fce17.firebaseapp.com",
    projectId: "petspro-fce17",
    storageBucket: "petspro-fce17.appspot.com",
    messagingSenderId: "1036445663259",
    appId: "1:1036445663259:web:2fa155837c257cc88038be",
    measurementId: "G-8MLTXNS2X5"
  };

  if(!firebase.apps.length){
    //Abrir minha conexao
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
  apiKey: "AIzaSyANkBpPqRiiJr2eMN8jpyUtCH79wq5GbF8",
  authDomain: "pets-proprietaire.firebaseapp.com",
  projectId: "pets-proprietaire",
  storageBucket: "pets-proprietaire.appspot.com",
  messagingSenderId: "238693836360",
  appId: "1:238693836360:web:f18ffa6bca3193ceca9a7d",
  measurementId: "G-6LBTHKG36X"
  };

  if(!firebase.apps.length){
    //Abrir minha conexao
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;
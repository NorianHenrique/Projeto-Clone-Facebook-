import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAT_cWfvkuuI7YfTvnCSHFFHT75IcHoiyY",
    authDomain: "facebook-clone-72cf5.firebaseapp.com",
    projectId: "facebook-clone-72cf5",
    storageBucket: "facebook-clone-72cf5.appspot.com",
    messagingSenderId: "5149808259",
    appId: "1:5149808259:web:e1921aa297d2aa6fde6db6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider =  new firebase.auth.GoogleAuthProvider();



export   {db, auth, storage, provider};
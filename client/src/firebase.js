import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyApwGR4HPbt1LZPudp_L9WvE3HsaGpAC5c",
  authDomain: "clone-a469f.firebaseapp.com",
  projectId: "clone-a469f",
  storageBucket: "clone-a469f.appspot.com",
  messagingSenderId: "94183852877",
  appId: "1:94183852877:web:95b03de331f426f9264504",
};

//initialize the firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//connect the database
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

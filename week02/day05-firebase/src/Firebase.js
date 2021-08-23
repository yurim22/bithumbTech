import firebase from "firebase";

var firebaseConfig = {
  apiKey: "apikey",
  authDomain: "authDomain",
  projectId: "projectId",
  storageBucket: "storeBucket",
  messagingSenderId: "massagingSenderId",
  appId: "addId",
  measurementId: "measurementId",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore;

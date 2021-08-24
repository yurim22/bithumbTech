import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDk-QkY8qIJI0FZBix4_u7F7Ywy0dWqQH0",
  authDomain: "bithumb-tech.firebaseapp.com",
  projectId: "bithumb-tech",
  storageBucket: "bithumb-tech.appspot.com",
  messagingSenderId: "951089870526",
  appId: "1:951089870526:web:e58265772335b1c53990ef",
  measurementId: "G-M0TXVZPNT9",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore;

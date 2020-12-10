import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBS_ZpuEOpDegNF6mj_mI7zw_QkfBsjXEA",
  authDomain: "buyfy-batch-02.firebaseapp.com",
  projectId: "buyfy-batch-02",
  storageBucket: "buyfy-batch-02.appspot.com",
  messagingSenderId: "894474728255",
  appId: "1:894474728255:web:e49e59be1839b00c1dd98a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
// export var provider = new firebase.auth.GoogleAuthProvider();
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();

export default firebase;

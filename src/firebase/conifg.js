import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqjm2OFzVf-qfAhgc-ExSBlBCTM_SiA8E",
  authDomain: "andre-firegram.firebaseapp.com",
  databaseURL: "https://andre-firegram.firebaseio.com",
  projectId: "andre-firegram",
  storageBucket: "andre-firegram.appspot.com",
  messagingSenderId: "459361397405",
  appId: "1:459361397405:web:9f847437cee9403053c274",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

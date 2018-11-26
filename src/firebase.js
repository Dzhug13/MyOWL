import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCd-qFiZRSdGaNvV_pZzAka8g9-ZQyQOqc",
    authDomain: "myowl-739b3.firebaseapp.com",
    databaseURL: "https://myowl-739b3.firebaseio.com",
    projectId: "myowl-739b3",
    storageBucket: "myowl-739b3.appspot.com",
    messagingSenderId: "302923301930"
  };

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
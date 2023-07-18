import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAAcdHYeQNwHdEk3UHDZHsueIOdEWHl-tA",
  authDomain: "admob-app-id-1676370691.firebaseapp.com",
  databaseURL: "https://admob-app-id-1676370691.firebaseio.com",
  projectId: "admob-app-id-1676370691",
  storageBucket: "admob-app-id-1676370691.appspot.com",
  messagingSenderId: "825330484706",
  appId: "1:825330484706:web:a18eba2ff2bea794c3a5bb",
  measurementId: "G-NJTSBMXBPW",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

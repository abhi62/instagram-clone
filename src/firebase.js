import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1PNbnviJlE_ImrMHbF6UoRAGQ7UyJy8k",
  authDomain: "panda-instagram-ap.firebaseapp.com",
  projectId: "panda-instagram-ap",
  storageBucket: "panda-instagram-ap.appspot.com",
  messagingSenderId: "310066234683",
  appId: "1:310066234683:web:78466d7dd533b37979231e",
  measurementId: "G-3RLBE965YE",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

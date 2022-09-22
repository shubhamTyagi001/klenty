import firebase from "firebase";

firebase.initializeApp = ({
    apiKey: "AIzaSyBcdtKNHQPV6aL4bUejwVQg1WQNfI6-gZ0",
    authDomain: "chat-app-cfcbb.firebaseapp.com",
    projectId: "chat-app-cfcbb",
    storageBucket: "chat-app-cfcbb.appspot.com",
    messagingSenderId: "645817164283",
    appId: "1:645817164283:web:864a16decb438917baeb5e",
    measurementId: "G-4LFQ5DX55S"
  });

  
export const firebaseRef = firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
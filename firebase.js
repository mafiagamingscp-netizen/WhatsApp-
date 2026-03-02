const firebaseConfig = {
  apiKey: "AIzaSyDiXfWn8EAke6rfp4S-tP-JPrEgv5ivBkA",
  authDomain: "communication-ebba7.firebaseapp.com",
  projectId: "communication-ebba7",
  storageBucket: "communication-ebba7.firebasestorage.app",
  messagingSenderId: "41372617613",
  appId: "1:41372617613:web:ac3b95e52e9bffa2d98bc4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

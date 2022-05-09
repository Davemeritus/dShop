import firebase from "firebase";

const firebaseConfig = { 
  apiKey: "AIzaSyAo-3u8d4_Ypymq9l-3OBHmM7W0X76Dkp8",
  authDomain: "dshop-df603.firebaseapp.com",
  projectId: "dshop-df603",
  storageBucket: "dshop-df603.appspot.com",
  messagingSenderId: "912139065901",
  appId: "1:912139065901:web:f15826dcaa90169d75f6a4",
  measurementId: "G-FPF22JY4C4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

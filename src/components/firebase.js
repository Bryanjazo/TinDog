// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBOgQhyipGpLqFolwwtEDQW-OEHf2XhJJc",
  authDomain: "sugar-babys.firebaseapp.com",
  projectId: "sugar-babys",
  storageBucket: "sugar-babys.appspot.com",
  messagingSenderId: "183681590369",
  appId: "1:183681590369:web:bc56ab0d0ce5123b2df620",
  measurementId: "G-T765HD1QCX"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
firebase.analytics();

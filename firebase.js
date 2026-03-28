// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth, GoogleAuthProvider } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");
const { getStorage } = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKQVDRTt5i5i0cNyrSxxW_N-S1vpwm4Ec",
  authDomain: "valsco-jurident.firebaseapp.com",
  projectId: "valsco-jurident",
  storageBucket: "valsco-jurident.firebasestorage.app",
  messagingSenderId: "596718606544",
  appId: "1:596718606544:web:4dc72fd5ccab6b72bd66d5",
  measurementId: "G-CVM890582X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/calendar.readonly");
const storage = getStorage(app); // Initialize storage
module.exports = { db, storage, app };

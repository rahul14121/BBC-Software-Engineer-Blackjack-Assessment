// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqJf8-kqP5uXszd2WcUyHO0OcTbMQiYbY",
  authDomain: "blackjack-game-53624.firebaseapp.com",
  projectId: "blackjack-game-53624",
  storageBucket: "blackjack-game-53624.appspot.com",
  messagingSenderId: "233703434518",
  appId: "1:233703434518:web:a3044e65d7bca05978c837",
  measurementId: "G-H4Z9K0Y0KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore();



export {app, database, analytics};
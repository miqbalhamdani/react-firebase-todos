// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm93zq6nIcGzIjliKZKr1TAttSlWrfl5k",
  authDomain: "react-demo-dde34.firebaseapp.com",
  databaseURL: "https://react-demo-dde34-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "react-demo-dde34",
  storageBucket: "react-demo-dde34.appspot.com",
  messagingSenderId: "631448919605",
  appId: "1:631448919605:web:5965b1060ea173bb6e5b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

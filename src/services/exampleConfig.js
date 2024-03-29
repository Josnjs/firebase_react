import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // All fields are required, you will find them in your app settings on firebase.google.com
  apiKey: "YOUR CREDENTIALS",
  authDomain: "YOUR AUTHDOMAIN",
  projectId: "YOUR PROJECT_ID",
  storageBucket: "YOUR STORE BUCKET",
  messagingSenderId: "498043678394",
  appId: "YOUR APP ID",
  measurementId: "YOUR MEASUREMENT ID",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };

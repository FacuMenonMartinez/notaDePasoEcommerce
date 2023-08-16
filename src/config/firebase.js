import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADBI5fYoGRr44pSxcMSIfdlX3OUw57_Wg",
  authDomain: "notadepaso-30936.firebaseapp.com",
  projectId: "notadepaso-30936",
  storageBucket: "notadepaso-30936.appspot.com",
  messagingSenderId: "384281802978",
  appId: "1:384281802978:web:ff8feac46d47ff9f2f06bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
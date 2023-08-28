import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "file-manager-395310.firebaseapp.com",
  projectId: "file-manager-395310",
  storageBucket: "file-manager-395310.appspot.com",
  messagingSenderId: "689697603154",
  appId: "1:689697603154:web:69a7589ceb543c21a3698b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

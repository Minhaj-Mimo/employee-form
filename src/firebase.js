import { initializeApp } from "firebase/app";

import {
  doc,
  onSnapshot,
  addDoc,
  collection,
  query,
  updateDoc,
  deleteDoc,
  getFirestore,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBksADJ4HfPHzT6hnERxCzzEP3EJN4y3VU",
  authDomain: "employee-form-97db6.firebaseapp.com",
  projectId: "employee-form-97db6",
  storageBucket: "employee-form-97db6.appspot.com",
  messagingSenderId: "437483770751",
  appId: "1:437483770751:web:b57da3ab7b4b7de63ec04a"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const db = getFirestore(app);

// Exporting everything that we need from firebase
export { doc, onSnapshot, addDoc, collection, query, updateDoc, deleteDoc };
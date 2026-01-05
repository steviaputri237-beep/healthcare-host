// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "healthcare-info.firebaseapp.com",
  projectId: "healthcare-info",
  storageBucket: "healthcare-info.appspot.com",
  messagingSenderId: "123456",
  appId: "APP_ID"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// EXPORT fungsi
export async function getFasilitas() {
  const querySnapshot = await getDocs(collection(db, "fasilitas"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
}
// JavaScript Document
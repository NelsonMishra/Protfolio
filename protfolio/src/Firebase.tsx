
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARr_6WFMSG1m_OrVq5bKgvuAkeKGITJUA",
  authDomain: "portfolio-d0306.firebaseapp.com",
  projectId: "portfolio-d0306",
  storageBucket: "portfolio-d0306.appspot.com",
  messagingSenderId: "642261177265",
  appId: "1:642261177265:web:209ff3925da16b67132390",
  measurementId: "G-5RX6FFMLTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
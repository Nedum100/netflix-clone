import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOEPQvi3YEbHeZWjeA-oIiyhqPnSkVOns",
  authDomain: "netflix-yt-a1002.firebaseapp.com",
  projectId: "netflix-yt-a1002",
  storageBucket: "netflix-yt-a1002.appspot.com",
  messagingSenderId: "646332547848",
  appId: "1:646332547848:web:65d744825f466a87e1e2bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

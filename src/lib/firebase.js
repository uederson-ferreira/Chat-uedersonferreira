import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b32b7.firebaseapp.com",
  projectId: "reactchat-b32b7",
  storageBucket: "reactchat-b32b7.appspot.com",
  messagingSenderId: "837286004287",
  appId: "1:837286004287:web:3e2694e0080c94ec7e9a8a"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços Firebase com o app específico
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

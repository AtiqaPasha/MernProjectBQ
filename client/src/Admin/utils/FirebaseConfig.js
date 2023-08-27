import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-jMTFVl7nZfTki_rgawkeVaBeM7zoWzg",
  authDomain: "furniture-api-storage.firebaseapp.com",
  projectId: "furniture-api-storage",
  storageBucket: "furniture-api-storage.appspot.com",
  messagingSenderId: "771468026073",
  appId: "1:771468026073:web:621243bd90d2ecaf659ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);










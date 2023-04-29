import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI6k2xjeLNkelwXq2bHrNM0wk_OhKIks8",
  authDomain: "netflix-clone-4f7d9.firebaseapp.com",
  projectId: "netflix-clone-4f7d9",
  storageBucket: "netflix-clone-4f7d9.appspot.com",
  messagingSenderId: "598022709446",
  appId: "1:598022709446:web:85c38a819c42c91990b7c7"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
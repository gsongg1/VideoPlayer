// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClrODKXjfcfdPr0AG0Rp_x9V3OTUK0RBc",
  authDomain: "highlightvids-f43e8.firebaseapp.com",
  projectId: "highlightvids-f43e8",
  appId: "1:316917561639:web:48685336622430afebd102",
  measurementId: "G-2BQZRR6ZET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



//sign in with google popup
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

//sign out
export function signOut() {
    return auth.signOut();
}

//trigger callback when user auth state changes, helps to react to sign in sign out changes
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATJL5FTng0z4qy4KxXvtKS9TIf37d15KA",
  authDomain: "e-commerce-db-7238f.firebaseapp.com",
  projectId: "e-commerce-db-7238f",
  storageBucket: "e-commerce-db-7238f.appspot.com",
  messagingSenderId: "973943241299",
  appId: "1:973943241299:web:c9f43f546248c0415e64a6",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.id);
  console.log(userDocRef);

  const usersnapshot = await getDoc(userDocRef);
  console.log(usersnapshot);
};
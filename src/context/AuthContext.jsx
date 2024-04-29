import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth, db } from "../Services/firebase"; // Import auth and db from firebase.js
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

export function AuthContextProvider ({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  async function signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Set user document with email and empty favShows array
      await setDoc(doc(db, "users", user.uid), { email, favShows: [] });

      // setUser(currentUser); // If you want to update the user state immediately after signup
    } catch (error) {
      console.error("Error signing up:", error);
      throw error; // Rethrow the error to handle it in the component
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

import React, { createContext, useContext, useEffect, useState } from "react";

import { onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
const AuthProvider = createContext();

const Authentication = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const signIn = () => {
   
    signInWithRedirect(auth, provider)
  }
  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      
    });

    return unsubscribe;
  }, []);


  return (
    <AuthProvider.Provider value={{ signIn, logOut, currentUser }}>
      {children}
    </AuthProvider.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthProvider);
};
export default Authentication;

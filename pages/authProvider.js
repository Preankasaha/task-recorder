import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app, { initFirebase } from '../firebase/firebase.config';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  initFirebase();
  const auth = getAuth()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //sign up method
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //login method
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  //sign in with google
  const googleProviderSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  //log out method
  const logOut = () => {
    // localStorage.removeItem('genius-token');
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [])
  const authInfo = {
    user,
    googleProviderSignIn,
    createUser,
    logInUser,
    logOut,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app)
const authProvider = () => {
  return (
    <div>

    </div>
  );
};

export default authProvider;
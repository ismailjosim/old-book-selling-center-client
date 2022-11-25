import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../configs/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create new using with email and password
    const UserRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User login function
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update Newly Created User Info
    const updateUserInfo = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    // user logout functionality
    const userLogout = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        })
        return () => unsubscribe()
    }, [])





    const authInfo =
    {
        UserRegister,
        updateUserInfo,
        loginUser,
        user,
        userLogout,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

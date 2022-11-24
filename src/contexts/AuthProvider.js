import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../configs/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create new using with email and password
    const UserRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        UserRegister,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

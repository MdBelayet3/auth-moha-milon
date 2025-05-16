import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';

// create a context for authentication
/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // created state for user and loading
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // function for creating user by email and password
    const createUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email, password)
    }

    // function for signing in user by email and password
    const signInUser = (email, password) => {
        setLoading(true);
      return signInWithEmailAndPassword(auth,email, password)
    }

    // function for signing out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // useEffect for observing auth state changes
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('User state changed', currentUser);
        })

        return () => {
            unSubscribe();
        // cleanup function to unsubscribe from the auth state changes
        // when the component unmounts
        }
    },[])

    const authInfo = { user, loading, createUser, signInUser, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
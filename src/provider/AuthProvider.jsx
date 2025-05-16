import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';

// create a context for authentication
/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // function for creating user by email and password
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth,email, password)
    }

    // function for signing in user by email and password
    const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth,email, password)
    }

    // function for signing out user
    const logOut = () => {
        return signOut(auth);
    }

    // useEffect for observing auth state changes
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User state changed', currentUser);
        })

        return () => {
            unSubscribe();
        // cleanup function to unsubscribe from the auth state changes
        // when the component unmounts
        }
    },[])

    const authInfo = { user, createUser, signInUser, logOut };
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
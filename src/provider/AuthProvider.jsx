import React, { createContext } from 'react';
import PropTypes from 'prop-types';

// create a context for authentication
/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const authInfo ={}
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
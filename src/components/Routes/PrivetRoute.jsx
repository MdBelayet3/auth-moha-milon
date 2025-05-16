import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivetRoute = ({ children }) => {

    const {user} = useContext(AuthContext);
    console.log(user);

    // function to check if user is logged in or not
    if(user){
       return children
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

PrivetRoute.propTypes = {

};

export default PrivetRoute;
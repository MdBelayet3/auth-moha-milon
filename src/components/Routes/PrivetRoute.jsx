import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivetRoute = ({ children }) => {

    const {user, loading} = useContext(AuthContext);
    console.log(user);

    // function to check if user is logged in or not
    if(user){
       return children
    }

    // function to check if loading is true or false
    else if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

PrivetRoute.propTypes = {

};

export default PrivetRoute;
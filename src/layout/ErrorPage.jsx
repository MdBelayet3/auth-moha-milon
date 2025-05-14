import React from 'react';
import { useLocation, useNavigate, useRouteError } from 'react-router';

const ErrorPage = () => {

    // useNavigate & useRouteError & useLocation
    const error = useRouteError()
    console.log(error);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='flex flex-col justify-center text-center lg:my-44'>
            <div>
                <h2 className="text-xl">Oops!!!</h2>
                <p className="text-lg">Sorry, unexpected error occurred</p>
                <p className='text-gray-400'>Url : {location.pathname}</p>
                {
                    error.status === 404 && <div className='gap-3'>
                        <p>Page is not found</p>
                        <p className='my-3'>Go back where are you from</p>
                        <button className='btn btn-primary' onClick={() => navigate('/')}>Go Home</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;
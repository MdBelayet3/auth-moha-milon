import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <h2 className="text-xl">Email: {user && user.email}</h2>
            <h1 className='text-lg'>Name: Belayet Hosssain</h1>
            <p>He is a good person</p>
        </div>
    );
};

export default Profile;
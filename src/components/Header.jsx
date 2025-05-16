import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {

    // useContext to show login email name and control logout button
    const { user, logOut } = useContext(AuthContext);

    // dynamic NavLink
    const navLink = <>
        <li className='text-xl'><NavLink to="/" >Home</NavLink></li>
        <li className='text-xl'><NavLink to="/login" >Login</NavLink></li>
        <li className='text-xl'><NavLink to="/register" >Register</NavLink></li>
        <li className='text-xl'><NavLink to="/gptLogin" >GptLogin</NavLink></li>
        <li className='text-xl'><NavLink to="/orders" >Orders</NavLink></li>
        <li className='text-xl'><NavLink to="/profile" >Profile</NavLink></li>
    </>

    // function to handle logout
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User Logout Successfully");
            })
            .catch(error => {
                console.error(error);
                alert(error.message);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BelayetVista house</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex items-center gap-3'>
                        <p className='text-xl'>{user.email}</p>
                        <a onClick={handleLogOut} className="btn">Log out</a>
                    </div>
                        : <NavLink to="/login" className='btn btn-accent'>Login</NavLink>

                }
            </div>
        </div>
    );
};

export default Header;
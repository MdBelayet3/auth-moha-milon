import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='lg:max-w-6xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
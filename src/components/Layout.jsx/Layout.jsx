import React from 'react';
import { Outlet } from 'react-router-dom';
import App from '../../App';

const Layout = () => {
    return (
        <div>
            <App></App>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;
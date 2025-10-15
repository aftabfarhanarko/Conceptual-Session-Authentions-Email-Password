import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
  import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
             <ToastContainer />
        </div>
    );
};

export default MainLayout;
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
  import { ToastContainer } from 'react-toastify';
  import '../../index.css';

const MainLayout = () => {
    return (
        <div className='open-sans-font'>
            <Navbar></Navbar>
            <Outlet></Outlet>
             <ToastContainer />
        </div>
    );
};

export default MainLayout;
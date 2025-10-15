import React from "react";
import logo from '../../assets/react.svg'
import { NavLink } from "react-router";
import './nav.css'

const Navbar = () => {
  return (
   <div className="bg-white/80">
    <div className="flex flex-col gap-4 md:flex-row items-center justify-between max-w-[1300px] mx-auto  p-3 text-black">
   <div className="border-2 p-2 rounded-full bg-base-300  ">
     <img src={logo}></img>
   </div>
     <div>
        <NavLink className="mr-4" to="/">Home</NavLink>
        <NavLink className="mr-4" to="/profile">Profile</NavLink>
        <NavLink className="mr-4" to="/about">AboutUs</NavLink>
        <NavLink className="mr-4" to="/signin">SignIn</NavLink>
     </div>
     <div>
       <button className="btn btn-secondary">Sign In</button>

     </div>
   </div>
   </div>
  );
};

export default Navbar;

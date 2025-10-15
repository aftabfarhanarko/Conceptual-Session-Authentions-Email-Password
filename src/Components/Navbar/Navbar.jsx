import React from "react";
import logo from '../../assets/react.svg'
import { Link, NavLink } from "react-router";
import './nav.css'

const Navbar = () => {
  return (
   <div className="bg-white/80">
    <div className="flex flex-col gap-4 md:flex-row items-center justify-between max-w-[1300px] mx-auto  p-3 text-black">
   <div className=" p-2 rounded-full bg-gray-400  ">
     <img src={logo}></img>
   </div>
     <div>
        <NavLink className="mr-4" to="/">Home</NavLink>
        <NavLink className="mr-4" to="/profile">Profile</NavLink>
        <NavLink className="mr-4" to="/about">AboutUs</NavLink>
     </div>
     <div>
      <Link to="/signin"> <button className="btn btn-secondary">Sign In</button></Link>

     </div>
   </div>
   </div>
  );
};

export default Navbar;

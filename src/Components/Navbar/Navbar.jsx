import React, { useContext } from "react";
import logo from "../../assets/react.svg";
import { Link, NavLink } from "react-router";
import "./nav.css";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutsUser, loding } = useContext(AuthContext);

  return (
    <div className="bg-white/80">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between max-w-[1300px] mx-auto p-3 text-black">
        {/* Logo Section */}
        <div className="p-2 rounded-full bg-gray-400">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>

        {/* Navigation Links */}
        <div>
          <NavLink className="mr-4" to="/">
            Home
          </NavLink>
          <NavLink className="mr-4" to="/profile">
            Profile
          </NavLink>
          <NavLink className="mr-4" to="/about">
            About Us
          </NavLink>
        </div>

        {/* User Section */}
        <div className="relative">
          <div className="dropdown dropdown-bottom dropdown-center">
            {/* যদি user লগইন থাকে তাহলে তার photo দেখাবে, না থাকলে default icon */}
            <img
              tabIndex={0}
              role="button"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              }
              alt="user"
              className=" m-1 rounded-full w-10 h-10 object-cover border border-gray-300 hover:scale-105 transition-transform duration-200"
            />

            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-white rounded-box z-[1] w-56 p-3 shadow-lg"
            >
              {/* যদি user লগইন থাকে তাহলে তার ইমেইল দেখাবে */}
              {user ? (
                <>
                  <p className="py-2 text-center text-sm text-gray-700 border-b border-gray-200">
                    {user.email}
                  </p>

                  {loding ? (
                    <span className="loading loading-spinner text-primary mx-auto my-2"></span>
                  ) : (
                    <button
                      onClick={signOutsUser}
                      className="btn btn-secondary w-full mt-2"
                    >
                      Log Out
                    </button>
                  )}
                </>
              ) : (
                // লগইন না থাকলে Sign In বাটন দেখাবে
                <Link to="/signin" className="w-full">
                  <button className="btn btn-secondary w-full">Sign In</button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

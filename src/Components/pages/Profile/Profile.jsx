import React from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const handelTost = () => {
    toast.success(
      "🎉 You’ll be notified when the Profile page is ready Soon!",
      {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      }
    );
  };
  return (
    <div className="px-2 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-400 via-purple-500 to-purple-400 text-center   ">
      <h1 className="  text-3xl md:text-5xl font-semibold  md:font-bold text-white animate-bounce drop-shadow-lg ">
        🚀 Profile is Coming Soon
      </h1>

      <p className=" mt-6  text-white/80 animate-pulse">
        Stay tuned! We’re crafting something amazing for you ✨
      </p>
      <div>
        <button
          onClick={handelTost}
          className="btn btn-outline btn-accent mt-8 animate-pulse"
        >
          {" "}
          Notify Me
        </button>
      </div>
      <div>
        <p className="text-xl mt-58 animate-bounce">
          {" "}
          Developed by <span className="font-semibold ">Aftab Farhan 💎</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;

/**
 * {current ? (
          <div className="mx-auto rounded-2xl w-full max-w-sm flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white ">
            <div className="backdrop-blur-2xl  w-full max-w-sm border border-white/30 rounded-2xl shadow-2xl p-8 ">
              <img
                className="mx-auto w-[80px] h-[80px] rounded-full"
                src={current.photoURL}
              ></img>
              <h1 className="text-xl mt-2 font-semibold text-center">
                {current.displayName}
              </h1>
              <p className="text-center mt-2 text-md">{current.email}</p>
              <button
                onClick={signOutsUser}
                type="submit"
                className="my-btn mt-5 w-4/6"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
 */
import React from 'react';
import { toast } from "react-toastify";


const AboutUs = () => {
    const handelTost = () => {
        toast.success("🎉 You’ll be notified when the About Us page is ready Soon!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
      };
    return (
         <div className="px-2 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-400 via-purple-500 to-purple-400 text-center   ">
      <h1 className="  text-3xl md:text-5xl font-semibold  md:font-bold text-white animate-bounce drop-shadow-lg ">
        🚀About Us is Coming Soon
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

export default AboutUs;
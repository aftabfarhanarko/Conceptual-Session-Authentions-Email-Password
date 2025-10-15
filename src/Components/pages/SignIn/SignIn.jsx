import React from "react";
import "../../../index.css";
import { Link, NavLink } from "react-router";

const SignIn = () => {
  return (
    <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-purple-500 ">
      <div className="    md:flex gap-100 max-w-[1400px] px-5 items-center">
        <div className="text-center lg:text-left max-w-[700px] text-white">
          <h1 className="text-5xl font-bold">Sing In now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="mx-auto rounded-2xl w-full max-w-sm flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500">
          <div className="backdrop-blur-2xl  w-full max-w-sm border border-white/30 rounded-2xl shadow-2xl p-8">
            <h2 className="text-xl font-semibold text-center text-white mb-6">
              Sign In
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-white text-[14px] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-white text-black   outline-none border border-white/30 focus:border-white/80"
                />
              </div>

              <div>
                <label className="block text-white text-[14px]  mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 rounded-lg bg-white text-black  outline-none border border-white/30 focus:border-purple/80"
                />
              </div>

              <div className="flex justify-left text-[12px] -mt-2">
                <a href="#" className="text-white/70 hover:text-white">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="my-btn">
                Login
              </button>
            </form>

            <div className="flex items-center justify-center mt-6">
              <div className="border-t border-white/30 w-1/3"></div>
              <span className="text-white/70 px-3 text-sm">or</span>
              <div className="border-t border-white/30 w-1/3"></div>
            </div>

            <button className="mt-4 w-full bg-white text-gray-800 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="text-center text-white/80 mt-6 text-sm">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-green-500 font-semibold underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

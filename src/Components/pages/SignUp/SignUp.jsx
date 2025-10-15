import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
          <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-purple-500 ">
      <div className="    md:flex gap-100 max-w-[1400px] px-5 items-center">
        <div className="text-center lg:text-left max-w-[700px] text-white">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="mx-auto rounded-2xl w-full max-w-sm flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500">
          <div className="backdrop-blur-2xl  w-full max-w-sm border border-white/30 rounded-2xl shadow-2xl p-8">
            <h2 className="text-xl font-semibold text-center text-white mb-6">
              Sign Up Now
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

             

              <button type="submit" className="my-btn mt-4">
                Login
              </button>
            </form>

            <div className="flex items-center justify-center mt-6">
              <div className="border-t border-white/30 w-1/3"></div>
              <span className="text-white/70 px-3 text-sm">or</span>
              <div className="border-t border-white/30 w-1/3"></div>
            </div>


            <p className="text-center text-white/80 mt-3 text-sm">
              Don’t have an account?{" "}
              <Link to="/signin" className="text-green-500 font-semibold underline">
                Sign In Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;
import React, { useContext, useRef, useState } from "react";
import "../../../index.css";
import { Link } from "react-router";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";
import { Facebook } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const refernce = useRef(null);
  const [show, setShow] = useState(false);

  const { signInUserFun, googleSignInFun, resetPasswordFun, githubSignInFuc,myAccountSignIn } =
    useContext(AuthContext);

  const handelSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signInUserFun(email, password)
      .then((result) => {
        toast.success("Sign In User Succesfully");
        console.log(result.user);
        setCurrent(result.user);
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          toast.error(
            "This User are Not Sign Up . Please Enter Valid Email And Password"
          );
        }
      });
  };
  const handelGoogleProvider = () => {
    googleSignInFun()
      .then((gogl) => {
        toast.success("Google Account Loging Success");
        console.log(gogl.user);
      })
      .catch((error) => {
        toast.error("This Account Allrodey Loging");
        console.log(error.message);
      });
  };

  const haldelGitHubSign = () => {
    githubSignInFuc()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelfacbook = () => {
    myAccountSignIn()
    .then(result => {
      console.log(result.user)
    }).catch(err => {
      console.log(err);
    })
  };

  const forgetPass = () => {
    const myemail = refernce.current?.value;
    if (!myemail) {
      toast.error("Please enter your email before resetting password!");
      return;
    }

    resetPasswordFun(myemail)
      .then(() => {
        toast.success("Check your email to reset password");
      })
      .catch((er) => {
        console.log(er);
        toast.error("Not Valid Code Provied This ");
      });
  };

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

            <form onSubmit={handelSingIn} className="space-y-4">
              <div>
                <label className="block text-white text-[14px] mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full bg-white/40 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  ref={refernce}
                />
              </div>

              <div className="relative ">
                <label className="block text-white text-[14px]  mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  class="input input-bordered w-full bg-white/40 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <div
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-10 cursor-pointer "
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <div
                onClick={forgetPass}
                className="flex justify-left text-[12px] -mt-2"
              >
                <button
                  type="button"
                  className="text-white/70 hover:text-white"
                >
                  Forgot password?
                </button>
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

            <button
              onClick={handelGoogleProvider}
              class="test-btn flex mt-2 items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-medium text-xs hover:bg-gray-100 transition-colors cursor-pointer"
            >
             <FcGoogle />

              Sing In with Google
            </button>
            <button
              onClick={haldelGitHubSign}
              class="test-btn flex mt-2 items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-medium text-xs hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <FaGithub className="w-4 h-4" />
              Sing In with Github
            </button>
            <button
              onClick={handelfacbook}
              class="test-btn flex mt-2 items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-medium text-xs hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
              Sing In with Facbook
            </button>

            <p className="text-center text-white/80 mt-6 text-sm">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-green-500 font-semibold underline"
              >
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

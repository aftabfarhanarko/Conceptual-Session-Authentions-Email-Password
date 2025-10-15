import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../../firebase/firebase.config";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const SignUp = () => {
  const [show, setShow] = useState(false);

  const handelSubmite = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const namesa = e.target.name.value;
    console.log("Find Data", { email, pass, namesa });

    const testPassword =
      /^(?=[a-z]*[A-Z][a-z]*[!@#$%^&*])[A-Za-z!@#$%^&*]{6,}$/;

    if (!testPassword.test(pass)) {
      toast.error(
        "Password must be at least 6 characters and cannot contain spaces."
      );
      return;
    }

    const ubdeat = {
      displayName: namesa,
    };
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Creat Account");
        updateProfile(result.user, ubdeat);
        sendEmailVerification(result.user).then(() => {
          toast.apply("Please Veryfy Your Email");
        });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error(
            "User already exists in the database. Different Email Use"
          );
        } else if (e.code === "auth/weak-password") {
          toast.error("Bhai tomake at least 6 ta digit er pass dite hobe");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(e.message || "An unexpected error occurred.");
        }
      });
  };

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

            <form onSubmit={handelSubmite} className="space-y-4">
              <div>
                <label className="block text-white text-[14px] mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter Your Full Name"
                  className="w-full px-4 py-2 rounded-lg bg-white text-black   outline-none border border-white/30 focus:border-white/80"
                />
              </div>

              <div>
                <label className="block text-white text-[14px] mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-white text-black   outline-none border border-white/30 focus:border-white/80"
                />
              </div>

              <div className="relative">
                <label className="block text-white text-[14px]  mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-2 rounded-lg bg-white text-black  outline-none border border-white/30 focus:border-purple/80"
                />
                <div
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-10 cursor-pointer "
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </div>
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
              <Link
                to="/signin"
                className="text-green-500 font-semibold underline"
              >
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

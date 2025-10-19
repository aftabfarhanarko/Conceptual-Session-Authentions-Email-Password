import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider ,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const ContextProvider = ({ children }) => {
  // Creat User
  const creatUserFun = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   UpDeat Profile
  const updeatUserfun = (ubdeat) => {
    return updateProfile(auth.currentUser, ubdeat);
  };

 // Email vrify   
  const enailVeryfyFun = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // signInWithEmailAndPassword
  const signInUserFun = (email, password) => {
    return  signInWithEmailAndPassword(auth, email, password)
  }   

 //google signin   
  const googleSignInFun = () => {
    return  signInWithPopup(auth, googleProvider);
  }

 //github signin   
  const githubSignInFuc = () => {
    return  signInWithPopup(auth, githubProvider);
  }

  //reset Password Email
  const resetPasswordFun = (myemail) => {
    return sendPasswordResetEmail(auth, myemail);
  }

  const inforUser = {
    creatUserFun,
    updeatUserfun,
    enailVeryfyFun,
    signInUserFun,
    googleSignInFun,
    resetPasswordFun,
    githubSignInFuc
  };

  return (
    <AuthContext.Provider value={inforUser}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;

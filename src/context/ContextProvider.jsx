import React, { useEffect, useState } from "react";
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
  GithubAuthProvider, 
  FacebookAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding , setLoding] = useState(true);
  // Creat User
  const creatUserFun = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   UpDeat Profile
  const updeatUserfun = (ubdeat) => {
    setLoding(true);
    return updateProfile(auth.currentUser, ubdeat);
  };

 // Email vrify   
  const enailVeryfyFun = () => {
    setLoding(true);
    return sendEmailVerification(auth.currentUser);
  };

  // signInWithEmailAndPassword
  const signInUserFun = (email, password) => {
    setLoding(true);
    return  signInWithEmailAndPassword(auth, email, password)
  }   

 //google signin   
  const googleSignInFun = () => {
    setLoding(true);
    return  signInWithPopup(auth, googleProvider);
  }

 //github signin   
  const githubSignInFuc = () => {
    setLoding(true);
    return  signInWithPopup(auth, githubProvider);
  }
  const myAccountSignIn = () => {
    setLoding(true);
    return signInWithPopup(auth, facebookProvider);
  }

  //reset Password Email
  const resetPasswordFun = (myemail) => {
    setLoding(true);
    return sendPasswordResetEmail(auth, myemail);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
        setLoding(false);
      console.log(currUser);
      setUser(currUser);
    //   setLoading(false);
    })
     return () => {
      unsubscribe();
    };
  },[]);

  const signOutsUser = () => {
    signOut(auth);
    // setCurrent(null);
  };

  const inforUser = {
    creatUserFun,
    updeatUserfun,
    enailVeryfyFun,
    signInUserFun,
    googleSignInFun,
    resetPasswordFun,
    githubSignInFuc,
    myAccountSignIn,
    user,
    signOutsUser,
    loding
  };

  return (
    <AuthContext.Provider value={inforUser}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;

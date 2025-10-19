import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const ContextProvider = ({ children }) => {
    
    // Creat User
  const creatUserFun = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

//   UpDeat Profile 
const updeatUserfun = (ubdeat) => {
    return updateProfile(auth.currentUser, ubdeat);
}

   const enailVeryfyFun = () => {
    return sendEmailVerification(auth.currentUser);
   }
  const inforUser = {
    creatUserFun,
    updeatUserfun,
    enailVeryfyFun
  };

  return (
    <AuthContext.Provider value={inforUser}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;

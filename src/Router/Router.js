import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/pages/Home/Home";
import AboutUs from "../Components/pages/AboutUs/AboutUs";
import Profile from "../Components/pages/Profile/Profile";
import SignIn from "../Components/pages/SignIn/SignIn";
import SignUp from "../Components/pages/SignUp/SignUp";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
]);

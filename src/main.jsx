import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Router } from "./Router/Router.js";
import ContextProvider from "./context/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={Router}></RouterProvider>
    </ContextProvider>
  </StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AccountLayout from "../layouts/account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  // Protected Routes
  {
    path: "account",
    element: <AccountLayout />,
  },
]);
export default router;

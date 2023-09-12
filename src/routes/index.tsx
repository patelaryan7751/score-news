import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Login from "../pages/Signin";
import SignUp from "../pages/Signup";
import AccountLayout from "../layouts/account";
import NotFound from "../pages/NotFound";

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
  {
    path: "/sports/:id",
    element: <Home />,
  },
  // Protected Routes
  {
    path: "account",
    element: <AccountLayout />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "*", // This wildcard will match any other URL
    element: <NotFound />, // Render your NotFound component here
  },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import SignUp from "../pages/Signup";
import AccountLayout from "../layouts/account";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/Signin";
import HomePage from "../pages/Home/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Signout from "../pages/Signout";
import Profile from "../pages/Profile";
import UnauthenticatedProtectedRoute from "./UnauthenticatedProtectedRoute";
const router = createBrowserRouter([
  {
    element: (
      <UnauthenticatedProtectedRoute>
        <Home />
      </UnauthenticatedProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/sports/:id",
        element: <HomePage />,
      },
    ],
  },

  // Protected Routes
  {
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/account",
        element: <HomePage />,
      },
      {
        path: "/account/profile",
        element: <Profile />,
      },
      {
        path: "/account/sports/:id",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/signout",
    element: <Signout />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;

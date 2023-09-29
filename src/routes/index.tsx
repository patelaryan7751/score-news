import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import SignUp from "../pages/Signup";
import AccountLayout from "../layouts/account";
import NotFound from "../pages/NotFound";
import ArticleDetails from "../components/News/Articles/ArticleDetails";
import SignIn from "../pages/Signin";
import HomePage from "../pages/Home/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Signout from "../pages/Signout";
import Profile from "../pages/Profile";
import Preference from "../pages/Preference";
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
      // {
      //   path: "/articleDetails/:id",
      //   element: (
      //     <>
      //       <ArticleDetails />
      //       <HomePage />
      //     </>
      //   ),
      // },
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
        path: "/account/preference",
        element: <Preference />,
      },
      {
        path: "/account/sports/:id",
        element: <HomePage />,
      },
      // {
      //   path: "/account/articleDetails/:id",
      //   element: (
      //     <>
      //       <ArticleDetails />
      //       <HomePage />
      //     </>
      //   ),
      // },
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

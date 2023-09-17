import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Login from "../pages/Signin";
import SignUp from "../pages/Signup";
import AccountLayout from "../layouts/account";
import NotFound from "../pages/NotFound";
import ArticleDetails from "../components/News/Articles/ArticleDetails";

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: "/",
        element: <></>,
      },
      {
        path: "/sports/:id",
        element: <></>,
      },
      {
        path: "/articleDetails/:id",
        element: <ArticleDetails />,
      },
    ],
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

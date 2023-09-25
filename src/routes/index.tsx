import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import SignUp from "../pages/Signup";
import AccountLayout from "../layouts/account";
import NotFound from "../pages/NotFound";
import ArticleDetails from "../components/News/Articles/ArticleDetails";
import SignIn from "../pages/Signin";
import HomePage from "../pages/Home/HomePage";
const router = createBrowserRouter([
  {
    element: <Home />,
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
      {
        path: "/articleDetails/:id",
        element: (
          <>
            <ArticleDetails />
            <HomePage />
          </>
        ),
      },
    ],
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

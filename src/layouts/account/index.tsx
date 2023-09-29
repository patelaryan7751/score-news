import * as React from "react";
import Appbar from "./Appbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import ArticleDetails from "../../components/News/Articles/ArticleDetails";

const AccountLayout = () => {
  return (
    <>
      <Appbar />
      <main>
        <div className="mx-auto py-4 px-4 overflow-hidden ">
          <ArticleDetails />
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AccountLayout;

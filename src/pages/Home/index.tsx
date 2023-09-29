import React from "react";
import Appbar from "../../layouts/account/Appbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import ArticleDetails from "../../components/News/Articles/ArticleDetails";

function Home() {
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
}

export default Home;

import * as React from "react";
import Appbar from "./Appbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import ArticleDetails from "../../components/News/Articles/ArticleDetails";
import PreferenceModal from "../../pages/Preference/PreferenceModal";

const AccountLayout = () => {
  return (
    <>
      <Appbar />
      <main>
        <div className="mx-auto py-4 px-4 overflow-hidden ">
          <PreferenceModal />
          <ArticleDetails />
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AccountLayout;

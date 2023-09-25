import React from "react";
import Appbar from "../../layouts/account/Appbar";
import HomePage from "./HomePage";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Appbar />
      <main>
        <div className="mx-auto py-4 px-4 overflow-hidden ">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;

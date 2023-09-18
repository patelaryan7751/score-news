import React from "react";
import Appbar from "../../layouts/account/Appbar";
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Appbar />
      <main>
        <div className="mx-auto py-4 px-4 overflow-hidden ">
          <HomePage />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;

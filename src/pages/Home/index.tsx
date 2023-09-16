import React from "react";
import Appbar from "../../layouts/account/Appbar";
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Appbar />
      <main>
        <div className="mx-auto py-4 px-4 overflow-hidden ">
          <HomePage />
        </div>
      </main>
    </>
  );
}

export default Home;

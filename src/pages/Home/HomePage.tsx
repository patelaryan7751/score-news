import React from "react";
import AllMatches from "../../components/Matches";
import AllNews from "../../components/News";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <AllMatches />
      <AllNews />
      <Outlet />
    </>
  );
}

export default HomePage;

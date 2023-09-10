import React from "react";
import Appbar from "../../layouts/account/Appbar";
import AllMatches from "../../components/Matches";
import AllNews from "../../components/News";

function Home() {
  return (
    <>
      <Appbar />
      <main>
        <div className="mx-auto py-4 px-4 overflow-hidden ">
          <AllMatches />
          <AllNews />
        </div>
      </main>
    </>
  );
}

export default Home;

import React from "react";
import Appbar from "../../layouts/account/Appbar";
import AllMatches from "../../components/Matches";

function Home() {
  return (
    <>
      <Appbar />
      <main>
        <div className="mx-auto py-4 px-4">
          <AllMatches />
        </div>
      </main>
    </>
  );
}

export default Home;

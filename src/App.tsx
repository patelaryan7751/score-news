import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { MatchesProvider } from "./context/matches/context";
import { AllSportsProvider } from "./context/sports/context";
function App() {
  return (
    <>
      <AllSportsProvider>
        <MatchesProvider>
          <RouterProvider router={router} />
        </MatchesProvider>
      </AllSportsProvider>
    </>
  );
}
export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { MatchesProvider } from "./context/matches/context";
function App() {
  return (
    <>
      <MatchesProvider>
        <RouterProvider router={router} />
      </MatchesProvider>
    </>
  );
}
export default App;

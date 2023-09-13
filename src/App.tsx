import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { MatchesProvider } from "./context/matches/context";
import { AllSportsProvider } from "./context/sports/context";
import { TeamsProvider } from "./context/teams/context";
import { TabProvider } from "./context/tabs/context";
import { ArticlesProvider } from "./context/articles/context";
function App() {
  return (
    <>
      <TabProvider>
        <ArticlesProvider>
          <TeamsProvider>
            <AllSportsProvider>
              <MatchesProvider>
                <RouterProvider router={router} />
              </MatchesProvider>
            </AllSportsProvider>
          </TeamsProvider>
        </ArticlesProvider>
      </TabProvider>
    </>
  );
}
export default App;

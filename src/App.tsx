import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { MatchesProvider } from "./context/matches/context";
import { AllSportsProvider } from "./context/sports/context";
import { TeamsProvider } from "./context/teams/context";
import { TabProvider } from "./context/tabs/context";
import { ArticlesProvider } from "./context/articles/context";
import { SortDateProvider } from "./context/sortDate/context";
function App() {
  return (
    <>
      <SortDateProvider>
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
      </SortDateProvider>
    </>
  );
}
export default App;

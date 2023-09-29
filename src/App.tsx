import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { MatchesProvider } from "./context/matches/context";
import { AllSportsProvider } from "./context/sports/context";
import { TeamsProvider } from "./context/teams/context";
import { TabProvider } from "./context/tabs/context";
import { ArticlesProvider } from "./context/articles/context";
import { SortDateProvider } from "./context/sortDate/context";
import { UserProvider } from "./context/users/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ArtcleModalProvider } from "./context/articleModal/context";
function App() {
  return (
    <>
      <UserProvider>
        <ArtcleModalProvider>
          <SortDateProvider>
            <TabProvider>
              <ArticlesProvider>
                <TeamsProvider>
                  <AllSportsProvider>
                    <MatchesProvider>
                      <RouterProvider router={router} />
                      <ToastContainer />
                    </MatchesProvider>
                  </AllSportsProvider>
                </TeamsProvider>
              </ArticlesProvider>
            </TabProvider>
          </SortDateProvider>
        </ArtcleModalProvider>
      </UserProvider>
    </>
  );
}
export default App;

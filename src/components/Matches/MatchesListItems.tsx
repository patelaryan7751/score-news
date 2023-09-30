import React from "react";
import MatchBar from "./MatchBar";
import { useMatchesState } from "../../context/matches/context";
import { Match } from "../../context/matches/types";
import MatchSectionSkeletonLoader from "./Loader/MatchSectionSkeletonLoader";

export default function MatchesListItems() {
  let state: any = useMatchesState();
  const { matches, isAllMatchesLoading, isAllMatchesError, errorMessage } =
    state;
  if (matches.length === 0 && isAllMatchesLoading) {
    return (
      <>
        <MatchSectionSkeletonLoader />
      </>
    );
  }
  if (isAllMatchesError) {
    return <span>{errorMessage}</span>;
  }
  return (
    <div>
      <h3 className="text-2xl px-2 font-bold leading-6 text-gray-900">
        Live Games
      </h3>
      {matches.length === 0 ? (
        <>
          <div className="text-xl font-semibold m-2">No Games available!</div>
        </>
      ) : (
        <div className="flex overflow-x-scroll py-4 pr-6 w-screen custom-scrollbar">
          {matches.map((match: Match, index: number) => {
            if (match?.isRunning) {
              return <MatchBar match={match} key={index} />;
            }
          })}
          {matches.map((match: Match, index: number) => {
            if (!match?.isRunning) {
              return <MatchBar match={match} key={index} />;
            }
          })}
        </div>
      )}
    </div>
  );
}

import React from "react";
import MatchBar from "./MatchBar";
import { useMatchesState } from "../../context/matches/context";
import { Match } from "../../context/matches/types";

export default function MatchesList() {
  let state: any = useMatchesState();
  const { matches, isAllMatchesLoading, isAllMatchesError, errorMessage } =
    state;
  if (matches.length === 0 && isAllMatchesLoading) {
    return <span>Loading...</span>;
  }
  if (isAllMatchesError) {
    return <span>{errorMessage}</span>;
  }
  return (
    <div>
      <h3 className="text-2xl px-2 font-bold leading-6 text-gray-900">
        Live Games
      </h3>
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
    </div>
  );
}

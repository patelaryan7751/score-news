import React from "react";
import { Match, Team } from "../../context/matches/types";
import { useMatchesState } from "../../context/matches/context";
import { useMatchesDispatch } from "../../context/matches/context";
import { fetchMatch } from "../../context/matches/action";
interface MatchProps {
  match: Match;
}

const MatchBar = (props: MatchProps) => {
  const { isRunning, location, sportName, name, teams, id } = props?.match;
  let state: any = useMatchesState();
  const { isLoading, isError } = state;
  const matchDispatch = useMatchesDispatch();
  if (isError.error && isError.matchId === id) {
    return <span>{isError.errMsg}</span>;
  }
  return (
    <>
      <div
        key={id}
        className="flex-shrink-0 w-80 bg-white shadow-lg mx-2 p-4 rounded-md"
      >
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold ">
              {sportName}
              {isRunning ? (
                <>
                  <span className="animate-pulse bg-red-500 text-white font-bold rounded-md m-3 px-3 py-1 text-xs ">
                    Live
                  </span>
                </>
              ) : (
                <></>
              )}
            </h2>
            <p className="text-sm font-normal">{name}</p>
          </div>
          <div>
            <button
              onClick={() => {
                fetchMatch(matchDispatch, Number(id));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${
                  isLoading.matchId === Number(id) && isLoading.status
                    ? " animate-spin "
                    : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            {teams.map((team: Team) => (
              <h2 key={team?.id} className="text-md font-bold ">
                {team?.name}
              </h2>
            ))}
          </div>
          <div>
            {teams.map((team: Team) => (
              <p
                key={`${team?.name}${team?.id}`}
                className="text-md font-bold "
              >
                {team?.id}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchBar;

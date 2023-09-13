import React, { useEffect, useState } from "react";
import FavouriteNewsCard from "./FavouriteNewsCard";
import { useAllSportsState } from "../../../context/sports/context";
import { Sport } from "../../../context/sports/types";
import { useTeamsState } from "../../../context/teams/context";
import { Team } from "../../../context/matches/types";
import { useParams } from "react-router-dom";
import { useTabState } from "../../../context/tabs/context";
import { SportTabPageParams } from "../../../context/tabs/types";

function FavouriteNews() {
  let stateSports: any = useAllSportsState();
  let stateTeams: any = useTeamsState();
  let stateTabs: any = useTabState();
  const { id } = useParams<SportTabPageParams>();
  const [selectSport, setSelectSport] = useState<string>(`${id}`);
  const [selectTeam, setSelectTeam] = useState<string>();
  console.log(stateTabs.id, "Lop");
  useEffect(() => {
    setSelectSport(stateTabs.id);
  }, [stateTabs]);
  useEffect(() => {
    if (stateTeams?.teams.length > 0) {
      setSelectTeam(
        stateTeams.teams.filter(
          (team: Team) =>
            selectSport !== "yournews" &&
            getSportNameById(Number(selectSport)) === team.plays
        )[0]?.id
      );
    }
  }, [stateTabs, selectSport, stateTeams]);
  useEffect(() => {
    if (
      stateSports?.sports.length > 0 &&
      stateTabs.id === "yournews" &&
      stateTeams?.teams.length > 0
    ) {
      setSelectSport(stateSports?.sports[0].id);
      setSelectTeam(stateTeams?.teams[0].id);
    }
  }, [stateTabs.id, stateSports.sports, stateTeams]);
  const getSportNameById = (id: number) => {
    let sportName = stateSports?.sports?.find(
      (sport: Sport) => Number(sport?.id) === Number(id)
    )?.name;
    return sportName;
  };
  const handleChangeSports = (event: any) => {
    setSelectSport(event.target.value);
    console.log(event.target.value, "li");
  };
  const handleChangeTeams = (event: any) => {
    setSelectTeam(event.target.value);
    console.log(event.target.value, "li2");
  };
  console.log(selectSport, selectTeam, "liok");
  return (
    <div className="mt-5 pt-2">
      <h3 className="text-xl px-3 pt-1 font-bold leading-6 text-gray-900">
        Favourites
      </h3>
      <div className="p-3">
        {stateSports?.isLoading ? (
          <>Loading...</>
        ) : (
          <select
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={selectSport}
            onChange={handleChangeSports}
            key={"sports"}
          >
            {stateSports?.sports.map((sport: Sport) => (
              <option key={sport?.id} value={sport?.id}>
                {sport?.name}
              </option>
            ))}
          </select>
        )}
        {stateTeams?.isLoading ? (
          <>Loading...</>
        ) : selectSport !== "yournews" ? (
          <select
            key={"teams"}
            value={selectTeam}
            onChange={handleChangeTeams}
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {stateTeams?.teams.map((team: Team) => {
              if (getSportNameById(Number(selectSport)) === team?.plays) {
                return (
                  <option key={team?.id} value={team?.id}>
                    {team?.name}
                  </option>
                );
              } else {
                return "";
              }
            })}
          </select>
        ) : (
          <></>
        )}
      </div>
      <div className="overflow-y-scroll h-screen custom-scrollbar">
        {selectSport === "yournews" || selectTeam === undefined ? (
          <>
            <div className="flex flex-col items-center justify-center h-96">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-gray-600/75 w-32 h-32"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  Please select your favourite{" "}
                  {selectSport === "yournews" && selectTeam === undefined
                    ? "sports and team."
                    : selectSport === "yournews"
                    ? "sports"
                    : selectTeam === undefined
                    ? "team"
                    : ""}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <FavouriteNewsCard />
            <FavouriteNewsCard />
            <FavouriteNewsCard />
            <FavouriteNewsCard />
            <FavouriteNewsCard />
            <FavouriteNewsCard />
          </>
        )}
      </div>
    </div>
  );
}

export default FavouriteNews;

import React, { useEffect, useState } from "react";
import FavouriteNewsCard from "./FavouriteNewsCard";
import { useAllSportsState } from "../../../context/sports/context";
import { Sport } from "../../../context/sports/types";
import { useTeamsState } from "../../../context/teams/context";
import { Team } from "../../../context/matches/types";
import { useLocation, useParams } from "react-router-dom";
import { useTabState } from "../../../context/tabs/context";
import { SportTabPageParams } from "../../../context/tabs/types";
import { useArticlesState } from "../../../context/articles/context";
import FavouriteNewsCardList from "./FavouriteNewsCardList";

function FavouriteNews() {
  let stateSports: any = useAllSportsState();
  let stateTeams: any = useTeamsState();
  let stateTabs: any = useTabState();
  let stateArticles: any = useArticlesState();
  const location = useLocation();
  const route = location.pathname;
  const { id } = useParams<SportTabPageParams>();
  const [selectSport, setSelectSport] = useState<string>(
    `${!route.includes("articleDetails") ? id : ""}`
  );
  const [selectTeam, setSelectTeam] = useState<string>();
  // this hook make the sports field similar with the present news tab
  useEffect(() => {
    setSelectSport(stateTabs.id);
  }, [stateTabs]);
  // this hook set the state of sports and team fields to the top most sports and teams in their respective arrays when the present tab is "Your news"
  useEffect(() => {
    if (
      stateSports?.sports.length > 0 &&
      stateTabs.id === "yournews" &&
      stateTeams?.teams.length > 0
    ) {
      setSelectSport(stateSports?.sports[0].id);
      setSelectTeam(stateTeams?.teams[0].id);
    }
  }, [stateTabs, stateSports.sports, stateTeams]);
  //this hook sets the state of team field when a page is refreshed or it is visited the first time
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
        <FavouriteNewsCardList teamId={selectTeam} sportId={selectSport} />
      </div>
    </div>
  );
}

export default FavouriteNews;

import React, { useEffect } from "react";
import FavouriteNews from "./FavouriteNews";
import NewsPane from "./NewsPane";
import {
  useAllSportsDispatch,
  useAllSportsState,
} from "../../context/sports/context";
import { fetchAllSports } from "../../context/sports/action";
import { fetchTeams } from "../../context/teams/action";
import { useTeamsDispatch } from "../../context/teams/context";
import { useTabDispatch } from "../../context/tabs/context";
import { useNavigate, useParams } from "react-router-dom";
import { changeTab } from "../../context/tabs/action";
import { SportTabPageParams } from "../../context/tabs/types";

function AllNews() {
  const navigate = useNavigate();
  const dispatchTabs = useTabDispatch();
  const { id } = useParams<SportTabPageParams>();
  const dispatchSports = useAllSportsDispatch();
  const dispatchTeams = useTeamsDispatch();
  let sportsState: any = useAllSportsState();
  useEffect(() => {
    console.log(Number.isNaN(Number(id)));

    fetchAllSports(dispatchSports);
    fetchTeams(dispatchTeams);
    changeTab(dispatchTabs, { id: id === undefined ? "yournews" : id });
  }, []);

  useEffect(() => {
    if (id) {
      if (Number.isNaN(Number(id))) {
        navigate("/notfound");
      }
      if (
        Number(id) > sportsState?.sports?.length &&
        sportsState?.sports?.length > 0
      ) {
        navigate("/notfound");
      }
    }
  }, [sportsState?.sports]);
  return (
    <div>
      <h3 className="text-2xl px-2 my-5 font-bold leading-6 text-gray-900">
        Trending News
      </h3>
      <div className="grid md:grid-cols-4 grid-cols-1 bg-slate-200">
        <NewsPane />
        <FavouriteNews />
      </div>
    </div>
  );
}

export default AllNews;

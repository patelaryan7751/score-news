import React, { useEffect } from "react";
import FavouriteNews from "./FavouriteNews";
import NewsPane from "./NewsPane";
import { useAllSportsDispatch } from "../../context/sports/context";
import { fetchAllSports } from "../../context/sports/action";

function AllNews() {
  const dispatchSports = useAllSportsDispatch();
  useEffect(() => {
    fetchAllSports(dispatchSports);
  }, []);
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

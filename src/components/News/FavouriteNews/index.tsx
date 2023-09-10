import React from "react";
import FavouriteNewsCard from "./FavouriteNewsCard";

function FavouriteNews() {
  return (
    <div className="mt-5 pt-2">
      <h3 className="text-xl px-3 pt-1 font-bold leading-6 text-gray-900">
        Favourites
      </h3>
      <div className="p-3">
        <select
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Cricket"
        >
          <option>BasketBall</option>
          <option>Tennis</option>
          <option>Cricket</option>
        </select>
        <select
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Chennai Super Kings"
        >
          <option>Chennai Super Kings</option>
          <option>Tennis</option>
          <option>Cricket</option>
        </select>
      </div>
      <div className="overflow-y-scroll h-screen custom-scrollbar">
        <FavouriteNewsCard />
        <FavouriteNewsCard />
        <FavouriteNewsCard />
        <FavouriteNewsCard />
        <FavouriteNewsCard />
        <FavouriteNewsCard />
      </div>
    </div>
  );
}

export default FavouriteNews;

import React from "react";
import ArticleCard from "./ArticleCard";
import FavouriteNews from "./FavouriteNews";
import NewsPane from "./NewsPane";

function AllNews() {
  const tabs = [
    { name: "Your News", href: "#", current: true },
    { name: "Cricket", href: "#", current: false },
    { name: "BasketBall", href: "#", current: false },
    { name: "Field Hockey", href: "#", current: false },
    { name: "Tennis", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
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

import React from "react";
import ArticleCard from "../ArticleCard";
import NewsTab from "./NewsTab";
import ArticleCardList from "../ArticleCardList";

function NewsPane() {
  return (
    <div className="col-span-3 bg-slate-100/100 p-4 ">
      <NewsTab />
      <div className="overflow-y-scroll h-screen custom-scrollbar">
        {/* <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard /> */}
        <ArticleCardList />
      </div>
    </div>
  );
}

export default NewsPane;

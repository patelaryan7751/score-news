import React from "react";
import NewsTab from "./NewsTab";
import ArticleCardList from "../Articles/ArticleCardList";

function NewsPane() {
  return (
    <div className="col-span-3 bg-slate-100/100 p-4 ">
      <NewsTab />
      <div className="overflow-y-scroll h-screen custom-scrollbar">
        <ArticleCardList />
      </div>
    </div>
  );
}

export default NewsPane;

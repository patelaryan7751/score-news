import React from "react";
import ArticleCard from "./ArticleCard";
import { useArticlesState } from "../../../context/articles/context";
import { Article } from "../../../context/articles/types";
import { useTabState } from "../../../context/tabs/context";
import { usesortDateState } from "../../../context/sortDate/context";
import ArticleCardListSkeletonLoader from "./Loader/ArticleCardListSkeletonLoader";

function ArticleCardListItems() {
  let stateArticles: any = useArticlesState();
  let stateTab: any = useTabState();
  let stateSorteDate: any = usesortDateState();
  const {
    isAllArticlesLoading,
    articles,
    isAllArticlesError,
    errorMessageAllArticles,
  } = stateArticles;
  console.log(stateTab, "ll");
  const tabBasedDateBasedArticles = articles
    .filter(
      (article: Article) =>
        Number(stateTab.id) === Number(article?.sport.id) ||
        stateTab.id === "yournews"
    )
    .sort((a: Article, b: Article) => {
      let Adate = new Date(a.date);
      let Bdate = new Date(b.date);
      return Bdate.getTime() - Adate.getTime();
    })
    .filter((article: Article) => {
      if (stateSorteDate?.sort_action) {
        const dateObjectArticle = new Date(article?.date);
        const dateOfArticle = dateObjectArticle.toISOString().split("T")[0];
        const dateObjectSortDate = new Date(stateSorteDate?.sortDate);
        const dateOfSortDate = dateObjectSortDate.toISOString().split("T")[0];
        if (dateOfArticle === dateOfSortDate) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });
  if (articles.length === 0 && isAllArticlesLoading) {
    return (
      <>
        <ArticleCardListSkeletonLoader />
      </>
    );
  }
  if (isAllArticlesError) {
    return <span>{errorMessageAllArticles}</span>;
  }
  if (tabBasedDateBasedArticles.length === 0) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-96">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-gray-600/75 w-36 md:w-96 h-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-700 text-md md:text-2xl font-semibold">
              No News Found!
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {tabBasedDateBasedArticles.map((article: Article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </>
  );
}

export default ArticleCardListItems;

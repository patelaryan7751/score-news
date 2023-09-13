import React from "react";
import { useArticlesState } from "../../../context/articles/context";
import { Article } from "../../../context/articles/types";
import { Team } from "../../../context/matches/types";
import FavouriteNewsCard from "./FavouriteNewsCard";
interface FavouriteNewsCardListItemsProps {
  teamId: string;
  sportId: string;
}
function FavouriteNewsCardListItems(props: FavouriteNewsCardListItemsProps) {
  let articleState: any = useArticlesState();
  const { teamId, sportId } = props;
  const {
    isAllArticlesLoading,
    articles,
    isAllArticlesError,
    errorMessageAllArticles,
  } = articleState;
  const isTeamInArticle = (teamId: number, teams: Team[]) => {
    let getTeam = teams?.filter(
      (team: Team) => Number(team?.id) === Number(teamId)
    );
    if (getTeam.length === 1) {
      return true;
    } else {
      return false;
    }
  };
  if (articles.length === 0 && isAllArticlesLoading) {
    return <span>Loading...</span>;
  }
  if (isAllArticlesError) {
    return <span>{errorMessageAllArticles}</span>;
  }
  const selectionBasedArticles = articles?.filter(
    (article: Article) =>
      Number(article?.sport?.id) === Number(sportId) &&
      isTeamInArticle(Number(teamId), article?.teams)
  );
  if (selectionBasedArticles.length === 0) {
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
            <p className="text-gray-700 text-xl font-semibold">
              There is no news on the selection made.
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {selectionBasedArticles.map((article: Article) => (
        <FavouriteNewsCard
          key={article?.id}
          id={article?.id}
          title={article?.title}
          summary={article?.summary}
        />
      ))}
    </>
  );
}

export default FavouriteNewsCardListItems;

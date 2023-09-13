import { Team } from "../matches/types";
import { Sport } from "../sports/types";

export interface Article {
  id: number;
  title: string;
  thumbnail: string;
  sport: Sport;
  date: Date;
  summary: string;
  teams: Team[];
  content?: string;
}

export interface ArticlesState {
  articles: Article[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  isAllArticlesLoading: boolean;
  isAllArticlesError: boolean;
  errorMessageAllArticles: string;
}
export type ArticleActions =
  | { type: "FETCH_ALL_ARTICLES_REQUEST" }
  | { type: "FETCH_ALL_ARTICLES_SUCCESS"; payload: Article[] }
  | { type: "FETCH_ALL_ARTICLES_FAILURE"; payload: string }
  | { type: "FETCH_ARTICLE_REQUEST" }
  | { type: "FETCH_ARTICLE_SUCCESS"; payload: Article }
  | { type: "FETCH_ARTICLE_FAILURE"; payload: string };

export type ArticlesDispatch = React.Dispatch<ArticleActions>;

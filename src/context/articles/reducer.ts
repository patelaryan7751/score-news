import { Article, ArticleActions, ArticlesState } from "./types";

export const initialState: ArticlesState = {
  articles: [],
  article: {
    id: 0,
    title: "",
    thumbnail: "",
    sport: { id: 0, name: "" },
    date: "",
    summary: "",
    teams: [{ id: 0, name: "" }],
    content: "",
  },
  isLoading: false,
  isError: false,
  errorMessage: "",
  isAllArticlesLoading: false,
  isAllArticlesError: false,
  errorMessageAllArticles: "",
};

export const reducer = (
  state: ArticlesState,
  action: ArticleActions
): ArticlesState => {
  switch (action.type) {
    case "FETCH_ALL_ARTICLES_REQUEST":
      return {
        ...state,
        isAllArticlesLoading: true,
      };
    case "FETCH_ALL_ARTICLES_SUCCESS":
      return {
        ...state,
        isAllArticlesLoading: false,
        articles: action.payload,
      };
    case "FETCH_ALL_ARTICLES_FAILURE":
      return {
        ...state,
        isAllArticlesLoading: false,
        isAllArticlesError: true,
        errorMessageAllArticles: action.payload,
      };
    case "FETCH_ARTICLE_REQUEST":
      return {
        ...state,
        isLoading: true,
        article: initialState.article,
      };
    case "FETCH_ARTICLE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        article: action.payload,
      };
    case "FETCH_ARTICLE_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
        article: initialState.article,
      };
    case "EMPTY_ARTICLE_STATE":
      return {
        ...state,
        isLoading: false,
        isError: false,
        article: initialState.article,
      };
    default:
      return state;
  }
};

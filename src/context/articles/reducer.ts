import { Article, ArticleActions, ArticlesState } from "./types";

export const initialState: ArticlesState = {
  articles: [],
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
      };
    case "FETCH_ARTICLE_SUCCESS":
      const modifiedArticles = state?.articles.map((article: Article) => {
        if (Number(article?.id) === Number(action.payload?.id)) {
          return action.payload;
        } else {
          return article;
        }
      });
      return {
        ...state,
        isLoading: false,
        articles: modifiedArticles,
      };
    case "FETCH_ARTICLE_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
  }
};

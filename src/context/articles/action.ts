import { API_ENDPOINT } from "../../config/constants";
import {
  generatePreferenceArticleArray,
  getSportsArrayFromPreferences,
  getTeamsArrayFromPreferences,
} from "../../utils/commonUtils";
export const fetchArticles = async (dispatch: any) => {
  const isAuth = !!localStorage.getItem("authToken");
  try {
    dispatch({ type: "FETCH_ALL_ARTICLES_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data, "ki");
    if (isAuth && getSportsArrayFromPreferences().length > 0) {
      dispatch({
        type: "FETCH_ALL_ARTICLES_SUCCESS",
        payload: generatePreferenceArticleArray(
          getSportsArrayFromPreferences(),
          getTeamsArrayFromPreferences(),
          data
        ),
      });
    } else {
      dispatch({ type: "FETCH_ALL_ARTICLES_SUCCESS", payload: data });
    }
  } catch (error) {
    console.log("Error fetching articles:", error);
    dispatch({
      type: "FETCH_ALL_ARTICLES_FAILURE",
      payload: "Unable to load articles",
    });
  }
};

export const fetchArticle = async (dispatch: any, id: number) => {
  try {
    dispatch({ type: "FETCH_ARTICLE_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/articles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data, "loi");
    if (response.ok) {
      dispatch({ type: "FETCH_ARTICLE_SUCCESS", payload: data });
    } else {
      dispatch({
        type: "FETCH_ARTICLE_FAILURE",
        payload: data.errors[0],
      });
    }
  } catch (error) {
    console.log("Error fetching article:", error);
    dispatch({
      type: "FETCH_ARTICLE_FAILURE",
      payload: "Unable to load article",
    });
  }
};

export const emptyArticle = async (dispatch: any) => {
  dispatch({ type: "EMPTY_ARTICLE_STATE" });
};

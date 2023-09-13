import { API_ENDPOINT } from "../../config/constants";
export const fetchArticles = async (dispatch: any) => {
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
    dispatch({ type: "FETCH_ALL_ARTICLES_SUCCESS", payload: data });
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
    dispatch({ type: "FETCH_ARTICLE_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching article:", error);
    dispatch({
      type: "FETCH_ARTICLE_FAILURE",
      payload: "Unable to load article",
    });
  }
};

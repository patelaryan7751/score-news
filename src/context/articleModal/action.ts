import { fetchArticle } from "../articles/action";

export const openModal = (
  dispatch: any,
  articleId: number,
  dispatchArticle: any
) => {
  dispatch({ type: "OPEN_MODAL", payload: articleId });
  fetchArticle(dispatchArticle, articleId);
};

export const closeTheModal = (dispatch: any) => {
  dispatch({ type: "CLOSE_MODAL" });
};

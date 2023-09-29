import { ArticleModalActions, articleModalState } from "./types";

export const initialState: articleModalState = {
  articleId: 0,
  modalStatus: false,
};

export const reducer = (
  state: articleModalState = initialState,
  action: ArticleModalActions
): articleModalState => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        articleId: action.payload,
        modalStatus: true,
      };
    case "CLOSE_MODAL":
      return {
        articleId: 0,
        modalStatus: false,
      };
    default:
      return state;
  }
};

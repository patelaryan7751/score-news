export interface articleModalState {
  articleId: number;
  modalStatus: boolean;
}

export type ArticleModalActions =
  | { type: "OPEN_MODAL"; payload: number }
  | { type: "CLOSE_MODAL" };

export type ArticleModalDispatch = React.Dispatch<ArticleModalActions>;

import { TabActions, TabState } from "./types";

export const initialState: TabState = {
  id: "yournews",
};

export const reducer = (
  state: TabState = initialState,
  action: TabActions
): TabState => {
  switch (action.type) {
    case "CHANGE_TAB":
      return action.payload;
    default:
      return state;
  }
};

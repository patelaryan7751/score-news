import { TabState } from "./types";

export const changeTab = (dispatch: any, tab: TabState) => {
  dispatch({ type: "CHANGE_TAB", payload: tab });
};

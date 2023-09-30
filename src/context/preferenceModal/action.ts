import { fetchAllSportsForPreferenceSelection } from "../sports/action";
import { fetchAllTeamsForPreferenceSelection } from "../teams/action";

export const openPrefModal = (
  dispatch: any,
  sportsDispatch: any,
  teamsDispatch: any
) => {
  fetchAllSportsForPreferenceSelection(sportsDispatch);
  fetchAllTeamsForPreferenceSelection(teamsDispatch);
  dispatch({ type: "OPEN_PREF_MODAL" });
};

export const closePrefModal = (dispatch: any) => {
  dispatch({ type: "CLOSE_PREF_MODAL" });
};

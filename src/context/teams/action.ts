import { API_ENDPOINT } from "../../config/constants";
import {
  generatePreferenceTeamArray,
  getSportsArrayFromPreferences,
  getTeamsArrayFromPreferences,
} from "../../utils/commonUtils";
export const fetchTeams = async (dispatch: any) => {
  const isAuth = !!localStorage.getItem("authToken");
  try {
    dispatch({ type: "FETCH_TEAMS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/teams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data, "liokui68");
    if (isAuth && getSportsArrayFromPreferences().length > 0) {
      console.log(
        generatePreferenceTeamArray(
          getTeamsArrayFromPreferences(),
          getSportsArrayFromPreferences(),
          data
        ),
        "teamarray"
      );
      dispatch({
        type: "FETCH_TEAMS_SUCCESS",
        payload: generatePreferenceTeamArray(
          getTeamsArrayFromPreferences(),
          getSportsArrayFromPreferences(),
          data
        ),
      });
    } else {
      dispatch({ type: "FETCH_TEAMS_SUCCESS", payload: data });
    }
  } catch (error) {
    console.log("Error fetching teams:", error);
    dispatch({
      type: "FETCH_TEAMS_FAILURE",
      payload: "Unable to load teams",
    });
  }
};

export const fetchAllTeamsForPreferenceSelection = async (dispatch: any) => {
  try {
    dispatch({ type: "FETCH_ALL_TEAMS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/teams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_ALL_TEAMS_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching teams:", error);
    dispatch({
      type: "FETCH_ALL_TEAMS_FAILURE",
      payload: "Unable to load teams",
    });
  }
};

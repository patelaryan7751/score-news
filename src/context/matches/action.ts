import { API_ENDPOINT } from "../../config/constants";
import {
  generatePrefernceMatchArray,
  getSportsArrayFromPreferences,
  getTeamsArrayFromPreferences,
} from "../../utils/commonUtils";
export const fetchMatches = async (dispatch: any) => {
  const isAuth = !!localStorage.getItem("authToken");
  try {
    dispatch({ type: "FETCH_MATCHES_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/matches`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (isAuth && getSportsArrayFromPreferences().length > 0) {
      dispatch({
        type: "FETCH_MATCHES_SUCCESS",
        payload: generatePrefernceMatchArray(
          getSportsArrayFromPreferences(),
          getTeamsArrayFromPreferences(),
          data.matches
        ),
      });
    } else {
      dispatch({ type: "FETCH_MATCHES_SUCCESS", payload: data.matches });
    }
  } catch (error) {
    dispatch({
      type: "FETCH_MATCHES_FAILURE",
      payload: "Unable to load matches",
    });
  }
};

export const fetchMatch = async (dispatch: any, id: number) => {
  try {
    dispatch({ type: "FETCH_MATCH_REQUEST", payload: Number(id) });
    const response = await fetch(`${API_ENDPOINT}/matches/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MATCH_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "FETCH_MATCH_FAILURE",
      payload: { matchId: Number(id), errorMsg: "Unable to load match" },
    });
  }
};

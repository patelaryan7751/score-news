import { API_ENDPOINT } from "../../config/constants";
import { getSportsArrayFromPreferences } from "../../utils/commonUtils";
export const fetchAllSports = async (dispatch: any) => {
  const isAuth = !!localStorage.getItem("authToken");
  try {
    dispatch({ type: "FETCH_SPORTS_REQUEST" });
    if (isAuth && getSportsArrayFromPreferences().length > 0) {
      dispatch({
        type: "FETCH_SPORTS_SUCCESS",
        payload: getSportsArrayFromPreferences(),
      });
    } else {
      const response = await fetch(`${API_ENDPOINT}/sports`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch({ type: "FETCH_SPORTS_SUCCESS", payload: data.sports });
    }
  } catch (error) {
    dispatch({
      type: "FETCH_SPORTS_FAILURE",
      payload: "Unable to load sports",
    });
  }
};

export const fetchAllSportsForPreferenceSelection = async (dispatch: any) => {
  try {
    dispatch({ type: "FETCH_ALL_SPORTS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/sports`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_ALL_SPORTS_SUCCESS", payload: data.sports });
  } catch (error) {
    dispatch({
      type: "FETCH_ALL_SPORTS_FAILURE",
      payload: "Unable to load sports",
    });
  }
};

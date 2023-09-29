import { toast } from "react-toastify";
import { API_ENDPOINT } from "../../config/constants";
import { Team } from "../matches/types";
import { Sport } from "../sports/types";
import { initialState } from "./reducer";
import { UserDetails } from "./types";

export const createUser = async (dispatch: any, data: UserDetails) => {
  try {
    dispatch({ type: "SIGNUP_REQUEST" });
    const { name, email, password } = data;
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    console.log(response);
    const responseData = await response.json();
    if (response.ok) {
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: {
          user: responseData.user,
          auth_token: responseData.auth_token,
        },
      });
      console.log("Sign-up successful");
      console.log(responseData);
      localStorage.setItem("authToken", responseData.auth_token);
      localStorage.setItem("userData", JSON.stringify(responseData.user));
      location.href = "/account";
    } else {
      dispatch({
        type: "SIGNUP_FAILURE",
        payload: responseData.errors[0],
      });
    }
  } catch (error) {
    console.log("Sign-up failed:", error);
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: "Unable to sign up!",
    });
  }
};

export const getUserSignedIn = async (
  dispatch: any,
  email: string,
  password: string
) => {
  try {
    dispatch({ type: "SIGNIN_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(response);
    const responseData = await response.json();
    if (response.ok) {
      dispatch({
        type: "SIGNIN_SUCCESS",
        payload: {
          user: responseData.user,
          auth_token: responseData.auth_token,
        },
      });
      console.log("Sign-in successful");
      console.log(responseData);
      localStorage.setItem("authToken", responseData.auth_token);
      localStorage.setItem("userData", JSON.stringify(responseData.user));
      location.href = "/account";
    } else {
      dispatch({
        type: "SIGNIN_FAILURE",
        payload: responseData.errors[0],
      });
    }
  } catch (error) {
    console.log("Sign-in failed:", error);
    dispatch({
      type: "SIGNIN_FAILURE",
      payload: "Unable to sign in!",
    });
  }
};

export const syncUserWithContextState = async (dispatch: any) => {
  try {
    let auth_token = localStorage.getItem("authToken");
    let userDetails = JSON.parse(localStorage.getItem("userData"));
    console.log(auth_token, userDetails, "opiy");
    if (!!auth_token && !!userDetails) {
      dispatch({
        type: "SYNC_USER_STATE",
        payload: {
          user: userDetails,
          auth_token: auth_token,
          isAuthenticated: true,
        },
      });
    } else {
      dispatch({
        type: "SYNC_USER_STATE",
        payload: {
          user: initialState.userDetails,
          auth_token: "",
          isAuthenticated: false,
        },
      });
    }
  } catch (error) {
    console.log("Sign-up failed:", error);
  }
};

export const addUserPreference = async (
  dispatch: any,
  sports: Sport[],
  teams: Team[]
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: "PREFERENCE_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ preferences: { sports: sports, teams: teams } }),
    });
    console.log(response, "pref1");
    const responseData = await response.json();
    if (response.ok) {
      console.log(responseData);
      dispatch({
        type: "PREFERENCE_ADD_SUCCESS",
        payload: {
          preferences: responseData.preferences,
        },
      });
      toast.success("Preference Updated!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch({
        type: "PREFERENCE_ADD_FAILURE",
        payload: responseData.errors[0],
      });
    }
  } catch (error) {
    dispatch({
      type: "PREFERENCE_ADD_FAILURE",
      payload: "Unable to add preference",
    });
  }
};

export const getUserPreference = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: "PREFERENCE_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response, "prefGET1");
    const responseData = await response.json();
    if (response.ok) {
      console.log(responseData);
      dispatch({
        type: "PREFERENCE_SUCCESS",
        payload: {
          preferences: responseData.preferences,
        },
      });
    } else {
      dispatch({
        type: "PREFERENCE_FAILURE",
        payload: responseData.errors[0],
      });
    }
  } catch (error) {
    dispatch({
      type: "PREFERENCE_FAILURE",
      payload: "Unable to get preference",
    });
  }
};

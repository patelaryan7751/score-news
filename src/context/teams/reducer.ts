import { TeamActions, TeamsState } from "./types";

export const initialState: TeamsState = {
  teams: [],
  AllTeams: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: TeamsState = initialState,
  action: TeamActions
): TeamsState => {
  switch (action.type) {
    case "FETCH_TEAMS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_TEAMS_SUCCESS":
      console.log(action.payload, "lkiteam");
      return {
        ...state,
        isLoading: false,
        teams: action.payload,
      };
    case "FETCH_TEAMS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "FETCH_ALL_TEAMS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_ALL_TEAMS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        AllTeams: action.payload,
      };
    case "FETCH_ALL_TEAMS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

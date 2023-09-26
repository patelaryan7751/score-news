import { AllSportsActions, AllSportsState } from "./types";

export const initialState: AllSportsState = {
  sports: [],
  AllSports: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: AllSportsState = initialState,
  action: AllSportsActions
): AllSportsState => {
  switch (action.type) {
    case "FETCH_SPORTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_SPORTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        sports: action.payload,
      };
    case "FETCH_SPORTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "FETCH_ALL_SPORTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_ALL_SPORTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        AllSports: action.payload,
      };
    case "FETCH_ALL_SPORTS_FAILURE":
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

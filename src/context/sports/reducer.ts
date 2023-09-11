import { AllSportsActions, AllSportsState } from "./types";

export const initialState: AllSportsState = {
  sports: [],
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
    default:
      return state;
  }
};

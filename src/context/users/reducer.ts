import { UserState, UserStateActions } from "./types";

export const initialState: UserState = {
  userDetails: {
    id: 0,
    name: "",
    email: "",
  },
  auth_token: "",
  isLoading: false,
  isError: false,
  isAuthenticated: false,
  errorMessage: "",
};

export const reducer = (
  state: UserState = initialState,
  action: UserStateActions
): UserState => {
  switch (action.type) {
    case "SIGNUP_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isLoading: false,
        userDetails: action.payload.user,
        auth_token: action.payload.auth_token,
        isError: false,
        isAuthenticated: true,
      };
    case "SIGNUP_FAILURE":
      console.log("kio");
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuthenticated: false,
        errorMessage: action.payload,
        userDetails: initialState.userDetails,
        auth_token: "",
      };
    case "SIGNOUT":
      return initialState;
    case "SIGNIN_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        userDetails: action.payload.user,
        auth_token: action.payload.auth_token,
        isError: false,
        isAuthenticated: true,
      };
    case "SIGNIN_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
        userDetails: initialState.userDetails,
        auth_token: "",
        isAuthenticated: false,
      };
    case "SYNC_USER_STATE":
      return {
        ...state,
        isLoading: false,
        userDetails: action.payload.user,
        auth_token: action.payload.auth_token,
        isError: false,
        isAuthenticated: action.payload.isAuthenticated,
      };
    default:
      return state;
  }
};

import { Team } from "../matches/types";
import { Sport } from "../sports/types";

export interface UserDetails {
  email: string;
  id: number;
  name: string;
  preferences?: any;
  password?: string;
}

export interface UserState {
  isAuthenticated: boolean;
  userDetails: UserDetails;
  auth_token: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type UserStateActions =
  | { type: "SIGNUP_REQUEST" }
  | {
      type: "SIGNUP_SUCCESS";
      payload: { user: UserDetails; auth_token: string };
    }
  | { type: "SIGNUP_FAILURE"; payload: string }
  | { type: "SIGNIN_REQUEST" }
  | {
      type: "SIGNIN_SUCCESS";
      payload: { user: UserDetails; auth_token: string };
    }
  | { type: "SIGNIN_FAILURE"; payload: string }
  | { type: "SIGNOUT" }
  | { type: "PREFERENCE_REQUEST" }
  | {
      type: "PREFERENCE_SUCCESS";
      payload: { preferences: { sports: Sport[]; teams: Team[] } };
    }
  | { type: "PREFERENCE_FAILURE"; payload: string }
  | { type: "PREFERENCE_ADD_REQUEST" }
  | {
      type: "PREFERENCE_ADD_SUCCESS";
      payload: { preferences: { sports: Sport[]; teams: Team[] } };
    }
  | { type: "PREFERENCE_ADD_FAILURE"; payload: string }
  | {
      type: "SYNC_USER_STATE";
      payload: {
        user: UserDetails;
        auth_token: string;
        isAuthenticated: boolean;
      };
    };

export type UserStateDispatch = React.Dispatch<UserStateActions>;

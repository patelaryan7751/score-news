import { Match, MatchActions, MatchState } from "./types";

export const initialState: MatchState = {
  matches: [],
  isLoading: {
    matchId: -1,
    status: false,
  },
  isError: {
    matchId: -1,
    error: false,
    errMsg: "",
  },
  isAllMatchesError: false,
  isAllMatchesLoading: false,
  errorMessage: "",
};

export const reducer = (
  state: MatchState = initialState,
  action: MatchActions
): MatchState => {
  switch (action.type) {
    case "FETCH_MATCHES_REQUEST":
      return {
        ...state,
        isAllMatchesLoading: true,
      };
    case "FETCH_MATCHES_SUCCESS":
      return {
        ...state,
        isAllMatchesLoading: false,
        matches: action.payload,
      };
    case "FETCH_MATCHES_FAILURE":
      return {
        ...state,
        isAllMatchesLoading: false,
        isAllMatchesError: true,
        errorMessage: action.payload,
      };
    case "FETCH_MATCH_REQUEST":
      return {
        ...state,
        isLoading: {
          matchId: Number(action.payload),
          status: true,
        },
      };
    case "FETCH_MATCH_SUCCESS":
      const modifiedMatches = state?.matches.map((match: Match) => {
        if (action.payload.id === match?.id) {
          return action.payload;
        } else {
          return match;
        }
      });
      return {
        ...state,
        isLoading: {
          matchId: -1,
          status: false,
        },
        matches: modifiedMatches,
      };
    case "FETCH_MATCH_FAILURE":
      return {
        ...state,
        isLoading: {
          matchId: -1,
          status: false,
        },
        isError: {
          matchId: action.payload.matchId,
          error: true,
          errMsg: action.payload.errrMsg,
        },
      };

    default:
      return state;
  }
};

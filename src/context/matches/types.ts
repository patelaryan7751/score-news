export interface Team {
  id: number;
  name: string;
}

export interface Match {
  id: number;
  endsAt: Date;
  isRunning: boolean;
  location: string;
  sportName: string;
  name: string;
  teams: Team[];
}

interface isLoadingMatchType {
  matchId: number;
  status: boolean;
}

interface isErrorMatchType {
  matchId: number;
  error: boolean;
  errMsg: string;
}

export interface MatchState {
  matches: Match[];
  isAllMatchesLoading: boolean;
  isAllMatchesError: boolean;
  isLoading: isLoadingMatchType;
  isError: isErrorMatchType;
  errorMessage: string;
}

export type MatchActions =
  | { type: "FETCH_MATCHES_REQUEST" }
  | { type: "FETCH_MATCHES_SUCCESS"; payload: Match[] }
  | { type: "FETCH_MATCHES_FAILURE"; payload: string }
  | { type: "FETCH_MATCH_REQUEST"; payload: number }
  | { type: "FETCH_MATCH_SUCCESS"; payload: Match }
  | {
      type: "FETCH_MATCH_FAILURE";
      payload: { matchId: number; errrMsg: string };
    };

export type MatchesDispatch = React.Dispatch<MatchActions>;

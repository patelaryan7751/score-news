export interface Sport {
  id: number;
  name: string;
}

export interface AllSportsState {
  sports: Sport[];
  AllSports: Sport[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type AllSportsActions =
  | { type: "FETCH_SPORTS_REQUEST" }
  | { type: "FETCH_SPORTS_SUCCESS"; payload: Sport[] }
  | { type: "FETCH_SPORTS_FAILURE"; payload: string }
  | { type: "FETCH_ALL_SPORTS_REQUEST" }
  | { type: "FETCH_ALL_SPORTS_SUCCESS"; payload: Sport[] }
  | { type: "FETCH_ALL_SPORTS_FAILURE"; payload: string };

export type AllSportsDispatch = React.Dispatch<AllSportsActions>;

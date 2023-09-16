import { sortDateActions, sortDateState } from "./types";

export const initialState: sortDateState = {
  sortDate: "2023-08-01",
  sort_action: false,
};

export const reducer = (
  state: sortDateState = initialState,
  action: sortDateActions
): sortDateState => {
  switch (action.type) {
    case "CHANGE_DATE":
      return {
        sortDate: action.payload,
        sort_action: false,
      };
    case "CHANGE_DATE_SORT_ACTION":
      console.log(state?.sortDate, "Li");
      return {
        ...state,
        sort_action: action.payload,
      };
    default:
      return state;
  }
};

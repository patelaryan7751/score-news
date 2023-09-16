export interface sortDateState {
  sortDate: Date | string;
  sort_action: boolean;
}
export type sortDateActions =
  | { type: "CHANGE_DATE"; payload: Date | string }
  | { type: "CHANGE_DATE_SORT_ACTION"; payload: boolean };
export type sortDateDispatch = React.Dispatch<sortDateActions>;

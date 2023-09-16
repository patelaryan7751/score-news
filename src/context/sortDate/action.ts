export const changeDate = (dispatch: any, date: Date | undefined) => {
  dispatch({ type: "CHANGE_DATE", payload: date });
};
export const changeDate_sortAction = (
  dispatch: any,
  sort_action_status: boolean
) => {
  dispatch({ type: "CHANGE_DATE_SORT_ACTION", payload: sort_action_status });
};

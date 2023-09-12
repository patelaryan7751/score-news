export interface TabState {
  id: string | undefined;
}

export type TabActions = { type: "CHANGE_TAB"; payload: TabState };
export type TabDispatch = React.Dispatch<TabActions>;
export interface SportTabPageParams extends Record<string, string> {
  id: string;
}

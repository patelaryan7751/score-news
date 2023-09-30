export interface PreferenceModalState {
  modalStatus: boolean;
}

export type PreferenceModalActions =
  | { type: "OPEN_PREF_MODAL" }
  | { type: "CLOSE_PREF_MODAL" };

export type PreferenceModalDispatch = React.Dispatch<PreferenceModalActions>;

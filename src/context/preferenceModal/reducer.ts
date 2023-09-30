import { PreferenceModalActions, PreferenceModalState } from "./types";

export const initialState: PreferenceModalState = {
  modalStatus: false,
};

export const reducer = (
  state: PreferenceModalState = initialState,
  action: PreferenceModalActions
): PreferenceModalState => {
  switch (action.type) {
    case "OPEN_PREF_MODAL":
      return {
        modalStatus: true,
      };
    case "CLOSE_PREF_MODAL":
      return {
        modalStatus: false,
      };
    default:
      return state;
  }
};

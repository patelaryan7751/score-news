import React, { createContext, useContext, useReducer } from "react";

import { initialState, reducer } from "./reducer";
import { PreferenceModalDispatch, PreferenceModalState } from "./types";

const PreferenceModalStateContext = createContext<
  PreferenceModalState | undefined
>(undefined);
const PreferenceModalDispatchContext = createContext<
  PreferenceModalDispatch | undefined
>(undefined);

export const usePreferenceModalState = () =>
  useContext(PreferenceModalStateContext);
export const usePreferenceModalDispatch = () =>
  useContext(PreferenceModalDispatchContext);

export const PreferenceModalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PreferenceModalStateContext.Provider value={state}>
      <PreferenceModalDispatchContext.Provider value={dispatch}>
        {children}
      </PreferenceModalDispatchContext.Provider>
    </PreferenceModalStateContext.Provider>
  );
};

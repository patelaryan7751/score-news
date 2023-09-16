import React from "react";
import { createContext, useContext, useReducer } from "react";
import { sortDateDispatch, sortDateState } from "./types";
import { initialState, reducer } from "./reducer";

const SortDateStateContext = createContext<sortDateState | undefined>(
  undefined
);
const SortDateDispatchContext = createContext<sortDateDispatch | undefined>(
  undefined
);

export const usesortDateState = () => useContext(SortDateStateContext);
export const usesortDateDispatch = () => useContext(SortDateDispatchContext);

export const SortDateProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SortDateStateContext.Provider value={state}>
      <SortDateDispatchContext.Provider value={dispatch}>
        {children}
      </SortDateDispatchContext.Provider>
    </SortDateStateContext.Provider>
  );
};

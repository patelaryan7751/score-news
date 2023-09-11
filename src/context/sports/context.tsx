import React from "react";
import { createContext, useContext, useReducer } from "react";
import { AllSportsDispatch, AllSportsState } from "./types";
import { initialState, reducer } from "./reducer";

const AllSportsStateContext = createContext<AllSportsState | undefined>(
  undefined
);
const AllSportsDispatchContext = createContext<AllSportsDispatch | undefined>(
  undefined
);

export const useAllSportsState = () => useContext(AllSportsStateContext);
export const useAllSportsDispatch = () => useContext(AllSportsDispatchContext);
export const AllSportsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AllSportsStateContext.Provider value={state}>
      <AllSportsDispatchContext.Provider value={dispatch}>
        {children}
      </AllSportsDispatchContext.Provider>
    </AllSportsStateContext.Provider>
  );
};

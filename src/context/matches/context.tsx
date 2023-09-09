import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { MatchState, MatchesDispatch } from "./types";
const MatchesStateContext = createContext<MatchState | undefined>(undefined);
const MatchesDispatchContext = createContext<MatchesDispatch | undefined>(
  undefined
);
export const useMatchesState = () => useContext(MatchesStateContext);
export const useMatchesDispatch = () => useContext(MatchesDispatchContext);
export const MatchesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state, "ji1");
  }, [state]);
  return (
    <MatchesStateContext.Provider value={state}>
      <MatchesDispatchContext.Provider value={dispatch}>
        {children}
      </MatchesDispatchContext.Provider>
    </MatchesStateContext.Provider>
  );
};

import React from "react";
import { createContext, useContext, useReducer } from "react";
import { TeamsDispatch, TeamsState } from "./types";
import { initialState, reducer } from "./reducer";

const TeamsStateContext = createContext<TeamsState | undefined>(undefined);
const TeamsDispatchContext = createContext<TeamsDispatch | undefined>(
  undefined
);
export const useTeamsState = () => useContext(TeamsStateContext);
export const useTeamsDispatch = () => useContext(TeamsDispatchContext);

export const TeamsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TeamsStateContext.Provider value={state}>
      <TeamsDispatchContext.Provider value={dispatch}>
        {children}
      </TeamsDispatchContext.Provider>
    </TeamsStateContext.Provider>
  );
};

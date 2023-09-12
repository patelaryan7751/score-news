import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { TabDispatch, TabState } from "./types";
import { initialState, reducer } from "./reducer";

const TabStateContext = createContext<TabState | undefined>(undefined);
const TabDispatchContext = createContext<TabDispatch | undefined>(undefined);

export const useTabState = () => useContext(TabStateContext);
export const useTabDispatch = () => useContext(TabDispatchContext);

export const TabProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TabStateContext.Provider value={state}>
      <TabDispatchContext.Provider value={dispatch}>
        {children}
      </TabDispatchContext.Provider>
    </TabStateContext.Provider>
  );
};

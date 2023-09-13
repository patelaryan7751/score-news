import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { ArticlesDispatch, ArticlesState } from "./types";
import { initialState, reducer } from "./reducer";

const ArticlesStateContext = createContext<ArticlesState | undefined>(
  undefined
);
const ArticlesDispatchContext = createContext<ArticlesDispatch | undefined>(
  undefined
);

export const useArticlesState = () => useContext(ArticlesStateContext);
export const useArticlesDispatch = () => useContext(ArticlesDispatchContext);
export const ArticlesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
};

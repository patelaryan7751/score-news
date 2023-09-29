import React, { createContext, useContext, useReducer } from "react";
import { ArticleModalDispatch, articleModalState } from "./types";
import { initialState, reducer } from "./reducer";

const ArticleModalStateContext = createContext<articleModalState | undefined>(
  undefined
);
const ArticleModalDispatchContext = createContext<
  ArticleModalDispatch | undefined
>(undefined);

export const useArticleModalState = () => useContext(ArticleModalStateContext);
export const useArticleModalDispatch = () =>
  useContext(ArticleModalDispatchContext);

export const ArtcleModalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ArticleModalStateContext.Provider value={state}>
      <ArticleModalDispatchContext.Provider value={dispatch}>
        {children}
      </ArticleModalDispatchContext.Provider>
    </ArticleModalStateContext.Provider>
  );
};

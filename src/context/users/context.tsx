import React, { createContext, useContext, useReducer } from "react";
import { UserState, UserStateDispatch } from "./types";
import { initialState, reducer } from "./reducer";

const UserStateContext = createContext<UserState | undefined>(undefined);
const UserDispatchContext = createContext<UserStateDispatch | undefined>(
  undefined
);

export const useUserState = () => useContext(UserStateContext);
export const useUserDispatch = () => useContext(UserDispatchContext);

export const UserProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";

const UiStateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const Context = ({ children }) => {
  const [sideBar, setSideBar] = useState(true);

  const value = {
    sideBar,
    setSideBar,
  };

  return (
    <UiStateContext.Provider value={value}>{children}</UiStateContext.Provider>
  );
};

export const useStateContext = () => useContext(UiStateContext);

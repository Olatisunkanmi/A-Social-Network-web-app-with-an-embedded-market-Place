import React, { createContext, useContext, useState, useReducer } from "react";
import { productsData } from "../data/data";
import axios from "axios";

const UiStateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

let reducer;

export const Context = ({ children }) => {
  const [Widget, setWidget] = useState(false);

  // product and cart state
  const [productState, productDispatch] = useReducer(reducer, {
    product: productsData,
  });

  const value = {
    Widget,
    setWidget,
    productState,
  };

  return (
    <UiStateContext.Provider value={value}>{children}</UiStateContext.Provider>
  );
};

export const useStateContext = () => useContext(UiStateContext);

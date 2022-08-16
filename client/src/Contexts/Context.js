import React, { createContext, useContext, useState, useReducer } from "react";
import { productsData } from "../data/data";
import { productReducer } from "./Reducer";

const UiStateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const Context = ({ children }) => {
  const [Widget, setWidget] = useState(false);

  // product and cart state
  const [productState, productDispatch] = useReducer(productReducer, {
    product: productsData,
    cart: [],
  });
  console.log(productState.cart);

  const value = {
    Widget,
    setWidget,
    productState,
    productDispatch,
  };

  return (
    <UiStateContext.Provider value={value}>{children}</UiStateContext.Provider>
  );
};

export const useStateContext = () => useContext(UiStateContext);

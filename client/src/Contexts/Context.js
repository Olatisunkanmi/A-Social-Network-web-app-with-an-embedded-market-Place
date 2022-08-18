import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { productsData } from "../data/data";
import { productReducer } from "./Reducer";

const UiStateContext = createContext();

// const initialState = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// };

export const Context = ({ children }) => {
  const [Widget, setWidget] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // product and cart state
  const [productState, productDispatch] = useReducer(productReducer, {
    product: productsData,
    cart: [],
  });

  useEffect(() => {
    setTotalPrice(
      productState.cart.reduce((prev, current) => {
        const itemTotal = current.price * current.qty;
        prev += itemTotal;
        return prev;
      }, 0)
    );
  }, [productState.cart]);

  const value = {
    Widget,
    setWidget,
    productState,
    productDispatch,
    totalPrice,
  };

  return (
    <UiStateContext.Provider value={value}>{children}</UiStateContext.Provider>
  );
};

export const useStateContext = () => useContext(UiStateContext);

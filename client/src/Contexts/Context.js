
import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const UiStateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};




export const Context = ( {children } ) => {
  const [Widget , setWidget  ] = useState(false)


  const value = {
    Widget, 
    setWidget,
    

  }

  return (
    <UiStateContext.Provider value={value}>{children}</UiStateContext.Provider>
  );
};

export const useStateContext = () => useContext(UiStateContext);

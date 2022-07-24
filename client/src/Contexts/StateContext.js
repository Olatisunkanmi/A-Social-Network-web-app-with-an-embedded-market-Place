import React, {createContext, useContext, useState } from 'react';

const StateContext = createContext()

const initialState = {
        chat: false,
        cart: false,
        userProfile: false,
        notification: false, 

}

export const ContextProvider = ( {  children } ) => {

        const [activeSidebar, setSideBar ] = useState(true);

   const value ={
    activeSidebar,
    setSideBar 
            }


    return (
        <StateContext.Provider
            value={value}
        >
                {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
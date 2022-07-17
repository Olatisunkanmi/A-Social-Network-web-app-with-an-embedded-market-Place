import React, { createContext } from 'react'
import { useState } from 'react'


 const UserContext = createContext(null)

const UserContextProvider   = ({children}) => {
const [isAuth, setIsAuth] = useState(null)

const value = {
    isAuth,
    setIsAuth,
};


  return (
        <UserContext.Provider value={value}>
            
        {children}
        </UserContext.Provider>
  )
}



export { UserContext,  UserContextProvider, 
}
import React, {createContext, useState} from 'react'

export const Context = createContext ();
const data = {};

const ContextProvider = ({children}) => {
 
    return (
        <Context.Provider value={data}>
        
        {children}

        </Context.Provider>
  )
}

export default ContextProvider
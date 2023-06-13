import React, {createContext, useState} from 'react'

export const Context = createContext ();
const data = {};

const ContextProvider = ({children}) => {
  const [selectedPizza, setSelectedPizza] = useState()

  const handleSelectedPizza = (value) => {
    setSelectedPizza(value)
  }
 
  const data ={
    selectedPizza,
    handleSelectedPizza
  }
    return (
        <Context.Provider value={data}>
        
        {children}

        </Context.Provider>
  )
}

export default ContextProvider
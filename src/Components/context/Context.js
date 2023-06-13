import React, {createContext, useState} from 'react'

export const Context = createContext ();
const data = {};

const ContextProvider = ({children}) => {
  const [selectedPizza, setSelectedPizza] = useState()
  const [count, setCount] = useState(1)

  const handleSelectedPizza = (value) => {
    setSelectedPizza(value)
  }
  const handleLess = () => {
    if (count > 1) {
      let temp = count;
      setCount(temp - 1)
    }
  }

  const handlePlus = () => {
    let temp = count;
    setCount(temp + 1)
  }
  const data ={
    selectedPizza,
    count,
    handleLess,
    handlePlus,
    handleSelectedPizza
  }
    return (
        <Context.Provider value={data}>
        
        {children}

        </Context.Provider>
  )
}

export default ContextProvider
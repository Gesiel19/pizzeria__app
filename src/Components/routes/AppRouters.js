import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import ContextProvider from "../context/Context";
import Home from "../home/Home";
import Login from "../login/Login"
import Register from "../register/Register"
import { createContext, useState } from "react";



export const AppContext = createContext({});


const AppRouters = () => {

  const [usuario, setUsuario] = useState({});

  return (
    <div>

    <AppContext.Provider
      value={{
        usuario,
        setUsuario,
      }}
      >

      <BrowserRouter>
        <ContextProvider>
          <Routes>
              
          <Route index element={<Login />} />
          <Route path={"/register"} element={<Register />}/>
            
            <Route path={"/"} element={<Layout />}>

              <Route index element={<Home />} />
             

            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};

export default AppRouters;
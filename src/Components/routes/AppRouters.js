import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import ContextProvider from "../context/Context";
import Home from "../home/Home";
import Login from "../login/Login"
import SearchsPizzas from "../searchs/SearchsPizzas";


const AppRouters = () => {

  return (
    <div>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
              
          <Route index element={<Login />} />
            
            <Route path={"/"} element={<Layout />}>

              <Route index element={<Home />} />
              <Route path="searchPizzas" element={<SearchsPizzas />} />

            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default AppRouters;
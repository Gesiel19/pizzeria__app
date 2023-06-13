import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import ContextProvider from "../context/Context";
import Home from "../home/Home";
import Login from "../login/Login"
import SuccessShop from "../shopDetails/SuccessShop"



const AppRouters = () => {

  return (
    <div>
      <BrowserRouter>
        <ContextProvider>
          <Routes>

            <Route index element={<Login />} />

            <Route path={"/"} element={<Layout />}>

              <Route path={"/Home"} index element={<Home />} />

            </Route>
            <Route path={"/SuccessShop"} element={<SuccessShop />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default AppRouters;
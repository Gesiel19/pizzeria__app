import React from 'react'
import { Outlet } from 'react-router-dom'
import profile from "../../assest/JN6CO66UKRHPFLQ6YY3ZNXSC44.jpg"
import Footer from "./Footer";
import "./Layout.scss"

const Layout = () => {
  return (
    <>
      <div className='LayoutContainer'>
        <div>
          <h1>Home</h1>
          <p>¡Que bueno verte Luna!</p>
        </div>
        <figure>
          <img className="profilePhoto" src={profile} alt="profile" />
        </figure>
      </div>
      
      <Outlet />
    </>
  )
}

export default Layout
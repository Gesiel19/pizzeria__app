import React from 'react'
import { Outlet } from 'react-router-dom'
import profile from "../../assest/JN6CO66UKRHPFLQ6YY3ZNXSC44.jpg"
import "./Layout.scss"
import Footer from "../../Components/layout/Footer"

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
      <Footer/>
    </>
  )
}

export default Layout
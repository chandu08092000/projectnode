import { NavLink,Outlet } from "react-router-dom";
import React from "react";
import './layout.css'


export default function Layout() {
  return (
    <div className="navbar">
      <h1><NavLink className='link1' to='/'>High-Q Labs</NavLink></h1>
        <div className="navlink">

            <NavLink activeClassName='active' className='link' to='/'>HOME</NavLink>
            <NavLink activeClassName='active' className='link' to='/About'>ABOUT US</NavLink>
            <NavLink activeClassName='active' className='link' to='/Contact'>CONTACT</NavLink>

        </div>
        
       <Outlet/>
    </div>
  )
}

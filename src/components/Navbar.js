import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo.svg'
import Hamburger from '../assets/hamburger.svg'
import '../styles/navbar.css'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} style={{height: '50px', width: '50px'}} />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} style={{height: '50px', width: '50px'}}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
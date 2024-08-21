import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo.svg'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} style={{height: '50px', width: '50px'}} />
        </div>
        <div className='nav-elements'>
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
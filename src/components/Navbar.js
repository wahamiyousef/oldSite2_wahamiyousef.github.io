import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo.svg'
import Hamburger from '../assets/hamburger.svg'
import Email from '../assets/email.svg'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import '../styles/navbar.css'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const sections = ['home', 'about', 'projects', 'contact'];
    let currentSection = '';

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled && 'scrolled'}`}>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} style={{height: '50px', width: '50px'}} />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} style={{height: '50px', width: '50px'}} alt="Menu" />
        </div>
        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#" className={activeSection === 'home' ? 'active' : ''}>Home</a>
            </li>
            <li>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
            </li>
            <li>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            </li>
            <li>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </li>
            <div className='social-icon'>
              <a className="icons" href="https://www.linkedin.com/in/yousef-al-wahami" target="_blank"><img src={Linkedin} alt="LinkedIn"/></a>
              <a className="icons" href="https://github.com/wahamiyousef" target="_blank"><img src={Github} alt="GitHub"/></a>
              <a className="icons" href="mailto:alwahamiyousef@gmail.com"><img src={Email} alt="Email" /></a>
            </div>
            
            {/*
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
            */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { useState } from 'react'
import Logo from '../Logo.svg'

const Button = ({ children, link, onClick, variant = 'primary', photo, target }) => {
  const [hover, setHover] = useState(false);


  const defaultStyles = {
    display: 'flex',
    justifyContent: 'center', alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    padding: '12px 15px',
    borderRadius: '4px',
    fontSize: '20px',
    /*
    borderTop: '1px solid #CCCCCC',
    borderRight: '1px solid #333333',
    borderBottom: '1px solid #333333',
    borderLeft: '1px solid #CCCCCC',
    border: '1px solid #000000',
    */
    cursor: 'pointer',
    color: '#333333',
    marginTop: '20px',
  };

  const styles = {
    primary: {
      // dark mode
      backgroundColor: hover ? '#141414' : '#1E1E1E',
      transform: hover ? 'translateY(-5px)' : 'translateY(0px)',
      transition: 'all 300ms',
      color: '#DDDDDD',
      //color: 'black'
    },
    contact: {
      backgroundColor: hover ? '#141414' : '#1E1E1E',
      transform: hover ? 'translateY(-5px)' : 'translateY(0px)',
      transition: 'all 300ms',
      color: '#DDDDDD',
    },
    linkedin: {
      
    },
    secondary: {
      // light mode
      backgroundColor: hover ? '#C6C6C6' : '#EEEEEE',
      //border: '1px solid white',
    },
  }

  const combinedStyle = { ...defaultStyles, ...styles[variant] };

  return (
    <a 
      onClick={onClick}
      href={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={combinedStyle}
      target={target}
    >
      <img src={photo} style={{height: '20px'}}/>
      {children}
    </a>
  );
}

export default Button
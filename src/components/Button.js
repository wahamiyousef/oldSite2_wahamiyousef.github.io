import React from 'react'
import { useState } from 'react'
import Logo from '../Logo.svg'
import Plane from '../assets/paperplane.svg'

const Button = ({ children, link, onClick, variant = 'primary' }) => {
  const [hover, setHover] = useState(false);


  const defaultStyles = {
    display: 'flex',
    justifyContent: 'center', alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    padding: '7px 10px',
    borderRadius: '4px',
    borderTop: '1px solid #CCCCCC',
    borderRight: '1px solid #333333',
    borderBottom: '1px solid #333333',
    borderLeft: '1px solid #CCCCCC',
    border: '1px solid #000000',
    cursor: 'pointer',
    color: '#333333',
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
    >
      <img src={Plane} style={{height: '30px'}}/>
      {children}
    </a>
  );
}

export default Button
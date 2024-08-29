import React from 'react'
import '../styles/contact.css'
import Email from '../assets/email.svg'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import '../styles/navbar.css'
import Button from '../components/Button'

function Contact() {
  return (
    <div id='contact' className='contactContainer'>
      <h1>Contact</h1>

      <div className='contactIcons'>
        <Button photo={Linkedin}>Connect</Button>
        <a className='contactIcons' style={{height: '50px'}}href="https://www.linkedin.com/in/yousef-al-wahami" target="_blank"><img src={Linkedin} alt="LinkedIn"/></a>
        <a className='contactIcons' href="https://github.com/wahamiyousef" target="_blank"><img src={Github} alt="GitHub"/></a>
        <a className='contactIcons' href="mailto:alwahamiyousef@gmail.com"><img src={Email} alt="Email" /></a>
      </div>
    </div>
  )
}

export default Contact
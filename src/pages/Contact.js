import React from 'react'
import '../styles/contact.css'
import Email from '../assets/emailWhite.svg'
import Linkedin from '../assets/linkedinWhite.svg'
import Github from '../assets/github.svg'
import '../styles/navbar.css'
import Button from '../components/Button'

function Contact() {
  return (
    <div id='contact' className='contactContainer'>
      <h1>Contact Me</h1>

      <div className='contactBox'>
        <div className='contactParagraph'>
          <p>Feel free to reach out to me!</p>
        </div>
        <div className='contactIcons'>
          <Button variant="socials" link="mailto:alwahamiyousef@gmail.com" photo={Email}>Email Me</Button>
          <Button variant="socials" link="https://www.linkedin.com/in/yousef-al-wahami" target="_blank" photo={Linkedin}>Connect on LinkedIn</Button>
        </div>
      </div>

    </div>
  )
}

export default Contact
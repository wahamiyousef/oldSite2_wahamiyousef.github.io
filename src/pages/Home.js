import React from 'react'
import '../styles/home.css'
import Button from '../components/Button.js'
import Plane from '../assets/paperplane.svg'

function Home() {
  return (
    <div id="home" className="home">
      <div className="intro" style={{alignItems: 'flex-start'}}>
        <h3>Hello, I'm</h3>
        <h1>Yousef Al-Wahami</h1>
        <h3>An aspiring Software Engineer</h3>
        <div className='buttons'>
          <Button link="#contact" variant='contact' photo={Plane}>Contact Me!</Button>
          <Button link="#about" variant='invis'>Learn More</Button>
        </div>
      </div>
      

      <div className='glass' style={{alignItems: 'flex-end'}}>
       <p>I AM GLASS</p>
      </div>
    </div>
  )
}

export default Home
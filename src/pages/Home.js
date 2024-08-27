import React from 'react'
import '../styles/home.css'
import Button from '../components/Button.js'

function Home() {
  return (
    <div id="home" className="home">
      <div className="intro" style={{alignItems: 'flex-start'}}>
        <h3>Hello, I'm</h3>
        <h1>Yousef Al-Wahami</h1>
        <h3>An aspiring Software Engineer</h3>
        <Button>Contact Me!</Button>
      </div>
      

      <div className='glass' style={{alignItems: 'flex-end'}}>
       <p>I AM GLASS</p>
      </div>
    </div>
  )
}

export default Home
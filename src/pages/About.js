import React from 'react'
import '../styles/about.css'

function About() {
  return (
    <div id='about' className='aboutContainer'>
      <h1>About Me</h1>
      <div className='aboutText'>
        <p>I am currently a student at the University of Windsor studying Computer Science.</p>
        <p>Here are some technologies I work with:</p>
        <ul className='techStack'>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
        </ul>
      </div>
    </div>
  )
}

export default About
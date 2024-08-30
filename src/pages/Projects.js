import React from 'react'
import '../styles/projects.css'
import { ReactComponent as Folder} from '../assets/folder.svg'
import { ReactComponent as GitHub} from '../assets/github.svg'
import { ReactComponent as Link} from '../assets/externalLink.svg'


class Projects extends React.Component {
  render() {
    const projects = {
      "ArabicScriptAI": {
        desc: "Scholarly open source web-app for learning how to write Arabic letters",
        stack: "Python, JavaScript, Vercel, PocketBase, Tesseract OCR",
        link: "https://arabic-script-ai.vercel.app/",
        open: "https://github.com/wahamiyousef/ArabicScriptAI"
      },
      "Invade Tower Defense": {
        desc: "Tower Defense game using Java utilizing object-oriented programming (OOP), made for Grade 12 FSE",
        stack: "Java, OOP",
        link: "",
        open: "https://github.com/wahamiyousef/Invade-Tower-Defense"
      },
      "Creaks": {
        desc: "Horror game developed for 2 week game jam with Unity using C#",
        stack: "Unity, Blender, Photoshop, FL Studio",
        link: "https://stuvs.itch.io/creaks",
        open: ""
      },
      "Personal Portfolio": {
        desc: "This website! ",
        stack: "HTML, CSS, React.js",
        link: "https://wahamiyousef.github.io/",
        open: "https://github.com/wahamiyousef/wahamiyousef.github.io"
      },
      "Fortnite": {
        desc: "Fortnite!! ",
        stack: "Fortnite?",
        link: "",
        open: "youtube.com/@arartex"
      }
    };

    return (
      <div id="projects" className='projectsContainer'>
        <h1>Projects</h1>

        <div className='projectsBox'>
          <ul className='projectsGrid'>
            {Object.keys(projects).map((key, i) => (
              <li className='projectsCard'>
                <div className='cardHeader'>
                  {/* 
                  <div className='folder-icon'>
                    <Folder />
                  </div>
                  */}
                  <div className='links'>
                    {projects[key]["link"] && <a href={projects[key]["link"]}><Link /></a>}
                    {projects[key]["open"] && <a href={projects[key]["open"]}><GitHub /></a>}
                  </div>
                </div>

                <div className='cardTitle'>{key}</div>
                <div className='cardDesc'>{projects[key]["desc"]}</div>
                <div className='cardTech'>{projects[key]["stack"]}</div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default Projects
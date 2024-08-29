import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.js'
import About from './pages/About.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    
    /* Multi-page routing
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
    */
  );
  
}

export default App;

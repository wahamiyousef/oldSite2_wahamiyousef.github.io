import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.js'
import About from './pages/About.js'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
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

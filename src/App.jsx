import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks'
import Home from './components/home'
import About from "./components/About"
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from "./components/Contact"
import { useState, useEffect } from 'react'
// import { ClipLoader } from 'react-spinners'


const App = () => {

  const [darkMode, setdarkMode] = useState(true);
  // const [loading, setLoading] = useState(true);
  
  

  return (
    
        <div className={darkMode && "dark"}>
        <NavBar darkMode={darkMode} setdarkMode={setdarkMode} />
        <Home darkMode={darkMode} setdarkMode={setdarkMode} />
        <About darkMode={darkMode} setdarkMode={setdarkMode} />
        <Experience darkMode={darkMode} setdarkMode={setdarkMode} />
        <Projects darkMode={darkMode} setdarkMode={setdarkMode} />
        <Contact darkMode={darkMode} setdarkMode={setdarkMode} />
        <SocialLinks darkMode={darkMode} setdarkMode={setdarkMode} />
      
      </div>
    

);
};

export default App;


import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks'
import Home from './components/home'
import About from "./components/About"
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from "./components/Contact"


const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />

      <SocialLinks />
    </div>
  )
}

export default App


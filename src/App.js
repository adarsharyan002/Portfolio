
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about/About'
import Home from './components/Home/Home'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact';
import ParticlesBackground from './components/Particles/Particles';



function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
    
      <Navbar/>
      <Home />
      <About/>
      
      <Project/>
      <Skills/>
      <Contact/>

      

    </div>
  );
}

export default App;

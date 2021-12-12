
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about/About'
import Home from './components/Home/Home'
import Project from './components/Projects/Project'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About/>
      <Project/>

      

    </div>
  );
}

export default App;

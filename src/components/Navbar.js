import './Navbar.css'
import {useState} from 'react';
import SoundBar from './Sound';
import { FaBars } from "react-icons/fa";


const Navbar = () => {

  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
    return (
      <div   className={navColour ? "sticky Navbody" : "navbar Navbody"}>
        <div className="Icon">
          <h1 className="h1">Adarsh</h1>
          <SoundBar className="Soundbar" />
          
          </div>

          <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i style={{color:'white'}}class="fas fa-bars"><FaBars/></i>
      </label>
          
        
        <ul className='Links ul'>
         
          <a className='li' href="#Home">Home</a>
          <a className='li' href="#About">About</a>
          <a className='li' href="#Skills">Skills</a>
          <a className='li' href="#Projects">Projects</a>
          <a className='li' href="#Contact">Contact </a>
          <div className="animation start-home"></div>
          
        </ul>
      </div>

        
      );
}
 
export default Navbar;
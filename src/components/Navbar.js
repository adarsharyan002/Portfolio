import './Navbar.css'
import {useState} from 'react';


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
          </div>
        
        <nav className='Links'>
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact me</a>
          <div class="animation start-home"></div>
        </nav>
      </div>

        
      );
}
 
export default Navbar;
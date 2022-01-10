import './About.css'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
     
        <div className="Container-about " id="About">
         
           <h1 className='Title' > <Slide left cascade>
           About Me
        </Slide></h1>

<Fade out> <p>I am a passionate Full Stack Developer who loves to explore new technologies and build scalable applications.Although I expertize in full-stack development, I prefer to work on the frontend of any application.


.</p></Fade>
         
          
          
        </div>
      );
}
 
export default About;
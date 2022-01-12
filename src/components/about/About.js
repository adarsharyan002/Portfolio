import './About.css'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
     
        <div className="Container-about " id="About">
         
           <h1 className='Title' > <Slide left cascade>
           About Me
        </Slide></h1>

<Fade out> <p>
I'm a full-stack developer located in India. I love to explore new technologies and  create simple yet beautiful websites with great user experience.
<br /> <br/>
I'm more into front-end and  like trying new things and building great projects. 
<br/> <br/>
I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.


.</p></Fade>
         
          
          
        </div>
      );
}
 
export default About;
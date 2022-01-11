import './Home.css'
import Resume from '../../assets/Resume.pdf';
import Tilt from 'react-tilt'
import Slide from 'react-reveal/Slide';



import Image from  '../../assets/Image.jpg'
const Home = () => {
    return ( 
        <section id="Home">
            <div className="Container-home" >
        <div className="left-box">
        <Slide left cascade >
        <h1 className='greeting'>Hi There!</h1>
            <h2>I'M Adarsh Aryan,</h2>
            <h2>MERN Stack Developer</h2>
            </Slide>
        
           
           <a href={Resume}  download="Resume"><button>Download Cv</button></a> 
        </div>
       <Tilt className="Tilt" options={{max:20}}>
           <div className="right-box">
          
<img src={Image} alt="Pic" />
        </div>
        </Tilt> 
    </div></section>
        
     );
}
 
export default Home;
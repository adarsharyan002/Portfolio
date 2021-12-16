import './Home.css'
import Cv from '../../assets/Cv.txt';
import Tilt from 'react-tilt'

import Image from  '../../assets/Image.jpg'
const Home = () => {
    return ( 
        <div className="Container-home" id="Home">
        <div className="left-box">
            <h1 className='greeting'>Hi There!</h1>
            <h2>I'M Adarsh Aryan,</h2>
            <h2>MERN Stack Developer</h2>
           <a href={Cv}  download="My-cv"><button>Download Cv</button></a> 
        </div>
       <Tilt className="Tilt" options={{max:20}}>
           <div className="right-box">
          
<img src={Image} alt="Pic" />
        </div>
        </Tilt> 
    </div>
     );
}
 
export default Home;
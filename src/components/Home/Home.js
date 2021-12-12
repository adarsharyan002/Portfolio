import './Home.css'

import Image from  '../../assets/Image.jpg'
const Home = () => {
    return ( 
        <div className="Container-home" id="Home">
        <div className="left-box">
            <h1 className='greeting'>Hi There!</h1>
            <h2>I'M Adarsh Aryan,</h2>
            <h2>MERN Stack Developer</h2>
            <button>Download Cv</button>
        </div>
        <div className="right-box">
          
<img src={Image} alt="Pic" />
        </div>
    </div>
     );
}
 
export default Home;
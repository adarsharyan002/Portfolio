import{
    SiGmail,
    SiFacebook,
    SiInstagram,
    SiLinkedin,
} from "react-icons/si";
import './Contact.css'

const Contact = () => {
    return (
        <div className="container-contact" id="Contact">
            <h1 className="Title">
                Contact Me
            </h1>
            <div className="Links-icon">
            <a href="mailto:adarsharyanmuz@gmail.com">  <div className="icon-btn12">  <div className="Icon01"> <SiGmail  /></div><h3>
                    Mail</h3></div> </a>
               
                    <a href="https://www.facebook.com/adarsharyan00">   <div className="icon-btn12"> <div className="Icon01"> <SiFacebook  /></div>
               <h3>Facebook</h3></div> </a> 
               <a href="https://www.instagram.com/_adarsh_765/">    <div className="icon-btn12">  <div className="Icon01"> <SiInstagram /></div>
               <h3>Instagram</h3></div> </a>
               <a href="https://www.linkedin.com/in/adarsh-aryan-364b78201/">     <div className="icon-btn12">  <div className="Icon01"> <SiLinkedin /></div>
              <h3>Linkdn</h3></div> </a>
            </div >
        </div>
      );
}
 
export default Contact;
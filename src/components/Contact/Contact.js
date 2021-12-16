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
                <div className="icon-btn12"> <a href="mailto:adarsharyanmuz@gmail.com"> <SiGmail/><h3>
                    Mail</h3></a></div>
               
               <div className="icon-btn12"><a href="https://www.facebook.com/adarsharyan00"> <SiFacebook/>
               <h3>Facebook</h3></a></div> 
               <div className="icon-btn12"> <a href="https://www.instagram.com/_adarsh_765/"> <SiInstagram/>
               <h3>Instagram</h3></a></div>
              <div className="icon-btn12">  <a href="https://www.linkedin.com/in/adarsh-aryan-364b78201/"> <SiLinkedin/>
              <h3>Linkdn</h3></a></div>
            </div >
        </div>
      );
}
 
export default Contact;
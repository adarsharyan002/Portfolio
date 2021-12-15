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
                <a href="mailto:adarsharyanmuz@gmail.com"> <SiGmail/></a>
                <a href="https://www.facebook.com/adarsharyan00"> <SiFacebook/></a>
                <a href="https://www.instagram.com/_adarsh_765/"> <SiInstagram/></a>
                <a href="https://www.linkedin.com/in/adarsh-aryan-364b78201/"> <SiLinkedin/></a>
            </div>
        </div>
      );
}
 
export default Contact;
import Projects from './Projects'
import './Projects.css'

import Slide from 'react-reveal/Slide';


import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

 const Project = () => {

  useEffect(()=>{
    AOS.init({duration:2000});

  },[])
  
  
    return (
      
        <div  className="container-project" id="Projects">
           <h1 className='Title title2'> <Slide cascade left>Projects</Slide></h1>
         
         
          {Projects.map((project,i)=>{
            return(
              <div key={i} data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className='single-project'>

                <div className='image'>
                  <img src={project.image} alt="pic" />
                </div>
                <div className='project-contents'>
                  <h1>{project.Name}</h1>
                  <p>{project.Description}</p>

                  <div className='Buttons'>
                   <a href={project.url}><button className='button-1 button'>Live</button></a> 
                   <a href={project.code}><button className="button-2 button">Code</button></a> 
                  </div>

                </div>
              </div>
            )
          })}

        </div>
      );
}
 
export default Project;
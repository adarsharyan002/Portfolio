import {Data} from './Icons'
import React from 'react'
import './Skills.css' ;

const Skills = () => {
    return (
        <div className='Container-skills' id="Skills">
           
            <h1 className="Title">Skills
       
            </h1>
            <div className='skill-icons'>{Data.map(language=> language.icon && React.createElement(language.icon,language.options))}</div>
            
          
        </div>
      );
}
 
export default Skills;
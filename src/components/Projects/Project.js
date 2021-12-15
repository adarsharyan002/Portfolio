import Projects from './Projects'
import './Projects.css'

 const Project = () => {
    return (
        <div className="container-project" id="Projects">
          <h1 className='Title title2'>Projects</h1>
          {Projects.map((project)=>{
            return(
              <div className='single-project'>

                <div className='image'>
                  <img src={project.image} alt="pic" />
                </div>
                <div className='project-contents'>
                  <h1>{project.Name}</h1>
                  <p>{project.Description}</p>

                  <div className='Buttons'>
                   <a href={project.url}><button className='button-1'>Live</button></a> 
                   <a href={project.code}><button className="button-2">Code</button></a> 
                  </div>

                </div>
              </div>
            )
          })}

        </div>
      );
}
 
export default Project;
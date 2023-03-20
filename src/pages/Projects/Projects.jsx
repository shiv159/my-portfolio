import React from 'react';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { projectList } from '../../helper/ProjectList';

import "./projects.css";

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {
        projectList.map((project,index)=>{
         return( <ProjectItem
         key={index}
          name={project.name}
          image={project.image}
          id={index}
           
           ></ProjectItem>);
        })
        }
      </div>
    </div>
  )
}

export default Projects
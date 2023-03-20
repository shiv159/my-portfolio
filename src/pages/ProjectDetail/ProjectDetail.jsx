import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../../helper/ProjectList';
import {Github} from "react-bootstrap-icons"
import { Link } from 'react-router-dom';
import "./projectdetail.css"
import Error from '../Error/Error';


function ProjectDetail() {
    const {id} =useParams();
    const len=projectList.length;
    if(id<0 || id>=len)
     {
     return <Error/>
     }
    const project =projectList[id];
  return (
    <div className='project'>
    <h1>{project.name}</h1>
    <img src={project.image} alt="project "></img>
    <p><b>Skills Used :</b>{project.skills}</p>
    <Link to={project.githubLink}><Github></Github></Link>

    </div>
    
  )
}

export default ProjectDetail
import React from 'react'
import "./home.css";
import {Github,Linkedin,Twitter} from 'react-bootstrap-icons';
import { twitter,linkedin,github } from "../../helper/Socials";
import { Link } from 'react-router-dom';

function Home() {
  let diff=new Date("Jan 1,2023").getTime()-new Date("July 1,2021").getTime();
  let days=Math.floor(diff/(1000*60*60*24));
  let experience=Math.round((days/365).toFixed(2));
  
  
  
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Shivam</h2>
        <div className='prompt'>
          <p> A self taught Full Stack Software Engineer with almost {experience} years of experience.
            I have always been interested in computers as a kid and I liked the feeling of creating something, Combine these two together and you get a Software Engineer!
          </p>
       <Link target="_blank" to={github} ><Github></Github></Link>
       <Link target="_blank" to={linkedin}><Linkedin></Linkedin></Link> 
        <Link target="_blank" to={twitter}><Twitter></Twitter></Link>
         
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
           <span>
           React, Redux, Angular, NPM, Bootstrap, HTML
          </span>  
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Spring Boot, Hibernate,MySQL,Microserices, RestAPIs</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Java,JavaScript</span>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home
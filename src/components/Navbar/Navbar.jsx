import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import './module.css';
import {List} from 'react-bootstrap-icons'
import { resumeLink } from '../../helper/Socials';

function Navbar() {
  const [expandNavbar ,setExpandNavbar] =useState(false);
  const location =useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location])

  function downloadResume(){
    const link=document.createElement('a');
    link.href=resumeLink;
    link.download='Shivam_Upadhayay_Resume.pdf';
    link.click();
  }
  return (
    <div className='navbar' id={expandNavbar?"open":"close"}>
        <div className='toggleButton'>
        <button onClick={()=>{
          setExpandNavbar((prev)=>!prev);
        }}>
          <List></List>
        </button>
        </div>
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link
          onClick={downloadResume}
          target="_blank" >Resume</Link>
        </div>
    </div>
  )
}

export default Navbar
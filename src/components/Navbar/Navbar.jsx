import React, { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import './module.css';
import {List} from 'react-bootstrap-icons'
import { saveAs } from 'file-saver';
import resume from "../../assets/Shivam_Upadhayay_Resume.pdf"


function Navbar() {
  const [expandNavbar ,setExpandNavbar] =useState(false);
  const location =useLocation();
  
  useEffect(() => {
    setExpandNavbar(false);
  }, [location])

  async function downloadResume(){

const Blobresponse=await fetch(resume).then((response)=>{

      return response.blob();
    });
    
    saveAs(Blobresponse,'Shivam_Upadhayay_Resume.pdf');
    
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
           >Resume</Link>
        </div>
    </div>
  )
}

export default Navbar

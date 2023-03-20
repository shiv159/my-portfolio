import "./module.css";
import React from 'react';
import { Link } from "react-router-dom";
import {Github,Linkedin,Twitter} from 'react-bootstrap-icons';
import { twitter,linkedin,github } from "../../helper/Socials";

function Footer() {
  let year=new Date().getFullYear();
  return (
    <div className="footer">
        <div className="socialMedia">
        <Link target="_blank" to={github} ><Github></Github></Link>
       <Link target="_blank" to={linkedin}><Linkedin></Linkedin></Link> 
        <Link target="_blank" to={twitter}><Twitter></Twitter></Link>
        </div>
        <p >Copyright © {year} Shivam</p>
    </div>
  )
}

export default Footer
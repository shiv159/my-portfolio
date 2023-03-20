import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {MortarboardFill,BriefcaseFill} from "react-bootstrap-icons";
function Experience() {
  return (
    <div className='eperience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="2017-2021"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<MortarboardFill></MortarboardFill>}
        >
         <h3 className='vertical-timeline-element-title'>Inderprastha Engineering College,Ghaziabad,Uttar Pradesh</h3> 
         <p>Bachelor of Technology</p>
         <p>Computer Science and Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work' 
        date=" Aug 2021-Aug 2022"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<BriefcaseFill></BriefcaseFill>}
        >
         <h3 className='vertical-timeline-element-title'>Cognizant Technology Solutions</h3> 
         <h4>Programmer Analyst Trainee</h4>
         <h6>Pune,India</h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work' 
        date="Aug 2022-Present"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<BriefcaseFill></BriefcaseFill>}
        >
         <h3 className='vertical-timeline-element-title'>Cognizant Technology Solutions</h3> 
         <h4>Jr. Software Engineer</h4>
         <h6>Pune,India</h6>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
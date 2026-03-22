import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { textVariant } from "../utils/motion";
import Grainient from './Grainient';


const EducationCard = ({education}) => {
 return (
    <div className="w-48 h-92 rounded-lg
    bg-[rgba(255,255,255,0.2)] 
      [box-shadow:0_4px_30px_rgba(0,0,0,0.5)]
      border border-transparent">
      <img src={education.logo} 
         className="w-16 h-16 rounded-4xl flex center"
         alt="education logo"/>

      <h1 className={styles.educationHeadText}>
        {education.name}
      </h1>

      <p className={styles.educationDescriptionText}>
       {education.description}
      </p>

      <h3 className={styles.educationHeadText}>
       {education.date}
      </h3>
   
    </div>
 )
}

export const Education = () =>  {
    return (
            <>
            
              <p className={styles.sectionSubText}>
                    Introduction
               </p>
                <p className={styles.sectionHeadText}>
                  Overview
                </p>

                <div className="grid grid-cols-4">
                  {
                    education.map((edu,index) => (
                      <EducationCard
                       key={`education-${index}`}
                       education={edu}/>
                    ))
                  }
                </div>
            </>
        )
}

export default Education;
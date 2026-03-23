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
  
    <div className=" sm:w-55 w-55 lg:w-55 sm:h-80 lg:h-80 h-70 rounded-lg
    bg-[rgba(255,255,255,0.2)] 
      [box-shadow:0_4px_30px_rgba(0,0,0,0.5)]
      border border-blue-200 grid place-items-baseline 
      justify-items-center p-2">
        <div className="mt-8">
           <img src={education.logo} 
             className="w-16 h-auto rounded-full mb-2" 
             alt="education logo"/>
        </div>

      <h1 className={styles.educationHeadText}>
        {education.name}
      </h1>

      <p className={styles.educationDescriptionText}>
       {education.description}
      </p>

      <p className={styles.educationDateText}>
       {education.date}
      </p>
   
    </div>
 )
}

export const Education = () =>  {
    return (
            <>
               <div className="mb-8">
                <p className={styles.sectionHeadText}>
                  Education
                </p>
               </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))]
                  place-items-center gap-4 p-2">
                  {
                    education.map((edu,index) => (
                      <EducationCard
                       key={`education-${index}`}
                       education={edu}/>
                    ))
                  }
                </div>

                <div className="mb-30"/>

            </>
        )
}

export default Education;
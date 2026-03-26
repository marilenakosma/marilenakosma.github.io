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
  
    <div className=" sm:w-55 xs:w-65 w-65 lg:w-55 @3xs:h-80 @xs:h-80 sm:h-80 rounded-lg
    bg-[rgba(255,255,255,0.2)] 
      [box-shadow:0_4px_30px_rgba(0,0,0,0.5)]
      backdrop-blur-xl
      border border-blue-200 flex flex-col shrink basis-auto
      items-center p-2">
        <div className="mt-8">
           <img src={education.logo} 
             className="w-16 h-auto block rounded-full mb-2" 
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

                <div className="flex flex-wrap flex-row
                  justify-center items-stretch gap-4 xs:gap-3 md:gap-4 lg:gap-15 xl:gap-18 
                  2xl:gap-22 p-2">
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
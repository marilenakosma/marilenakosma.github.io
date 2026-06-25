import { useState } from "react";
import { motion } from "motion/react"
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-parallax-tilt';

{/*bg-[rgba(255,255,255,0.2)]  */ }

const EducationCard = ({ index, education }) => {
  return (
    /*
     flex 
     flex-col 
     flex: 1 0 auto      
     min-w-[200px]      
     max-w-[280px]      
     min-h-[320px]      
     rounded-lg 
     bg-white/20 
     backdrop-blur-xl 
     border border-white/50 
     p-2
   */

    <Tilt
      tiltEnable={true}
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      className="[&:hover]:scale-110"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={`${styles.glassBg}  backdrop-blur-xl w-60 h-89 rounded-lg
         border border-white/50 
         flex 
         flex-col 
         flex: 1 0 auto
         items-center  
         p-2 
         md:p-4
      `}
      >
        <div className="mt-4 md:mt-8">
          <img src={education.logo}
            className="w-16 h-auto block rounded-full mb-4"
            alt="education logo" />
        </div>

        <p className={styles.educationHeadText}>
          {education.name}
        </p>

        <p className={styles.educationDescriptionText}>
          {education.description}
        </p>

        <p className={styles.educationDateText}>
          {education.date}
        </p>


      </motion.div>
    </Tilt>
  )
}

export const Education = () => {
  return (
    <>
      <motion.div className="mb-8" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Education
        </h2>

      </motion.div>

      {/*<div className="
  flex 
  flex-wrap 
  justify-center 
  items-stretch 
  gap-4 xs:gap-3 md:gap-4 lg:gap-15 xl:gap-18 2xl:gap-22 
  p-2 
  w-full 
  max-w-7xl 
  mx-auto
"> */}

      <div className="flex 
                  flex-wrap
                  justify-center 
                  items-stretch 
                  gap-6 
                  md:gap-8 
                  xl:gap-10               
                  w-full 
                  max-w-10xl 
                  mx-auto 
                  p-2
                  mb-16 
                  md:mb-24 
                  lg:mb-30">
        {
          education.map((edu, index) => (
            <EducationCard
              key={edu.name}
              index={index}
              education={edu}
            />
          ))
        }
      </div>

    </>
  )
}

export default SectionWrapper(Education, "education");
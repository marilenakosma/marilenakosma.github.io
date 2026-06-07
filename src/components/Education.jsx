import { useState } from "react";
import { motion } from "motion/react"

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-parallax-tilt';

{/*bg-[rgba(255,255,255,0.2)]  */ }

const EducationCard = ({ index, education }) => {
  const [scale, setScale] = useState(1.15);
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
      //tiltEnable={false}
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      scale={scale}
      transitionSpeed={2500}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={`${styles.glassBg}  backdrop-blur-xl sm:w-55 xs:w-65 w-65 lg:w-55 @3xs:h-80 @xs:h-80 sm:h-80 rounded-lg
      border border-white/50 
      flex 
      flex-col 
      flex: 1 0 auto
      items-center p-2
      `}
      >
        <div className="mt-8">
          <img src={education.logo}
            className="w-16 h-auto block rounded-full mb-2"
            alt="education logo" />
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


      </motion.div>
    </Tilt>
  )
}

export const Education = () => {
  return (
    <>
      <motion.div className="mb-8" variants={textVariant()}>
        <p className={styles.sectionHeadText}>
          Education
        </p>

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

      <div className="flex flex-wrap
                  justify-center items-stretch gap-8 xl:gap-10 w-full max-w-7xl mx-auto p-2">
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

      <div className="mb-30" />

    </>
  )
}

export default SectionWrapper(Education, "education");
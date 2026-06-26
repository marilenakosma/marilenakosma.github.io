import { useState } from "react";
import { motion } from "motion/react"
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-parallax-tilt';

const EducationCard = ({ index, education }) => {
  return (

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
        className={`${styles.glassBg} bg-white/15
         w-44 h-full
         sm:w-55
         md:w-60 
         md:h-89
         rounded-lg
         border border-white/50
         flex flex-col items-center
         p-2 md:p-3
      `}
      >
        <div className="mt-3 md:mt-8">
          <img src={education.logo}
            className="w-16 h-16 block rounded-full mb-4 object-contain"
            alt={education.logo_alt}
            width="64"
            height="64"
          />
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
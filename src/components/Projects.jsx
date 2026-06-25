import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { motion, useReducedMotion } from "motion/react"
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-parallax-tilt';
import { github } from "../assets/index.js";

const ProjectCard = ({ index, project }) => {

  const shouldReduceMotion = useReducedMotion()
  const isPortrait = project.name === "Serenify(thesis)"
  return (
    <Tilt
      tiltEnable={false}
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="white"
      glarePosition="bottom"
      glareBorderRadius="22px"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={`${styles.glassBg} ${styles.glassBorder} 
        w-full
        h-full
        max-w-md
        rounded-lg
        shadow-lg
        flex
        flex-col     
        items-center
        justify-center
        pl-3
        pr-3
        pt-3
      `}>

        <div className="flex flex-wrap 
        min-h-5
        gap-2 
        sm:gap-3
        mb-2 
        sm:mb-3
        md:mb-4 
        items-center
        self-start
        ">
          {
            project.tags.map((tag) => (
              <div
                key={`${project.name}-${tag.name}`}
                className={`${styles.glassProjectTagsBg} flex items-center gap-1.5 
                rounded-3xl 
                px-2
                py-0.5
                font-semibold
                [&:hover]:scale-110 
                [&:hover]:border-white-100 
                transition 
                duration-300
                p-1
            `}>
                <img src={tag.logo}
                  className="ml-1 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 rounded-md object-contain"
                  alt={tag.name}
                />

                <p
                  className="mr-2 text-black text-[13px] xs:text-[14px] sm:text-[14px] md:text-[16px] 
                  font-light 
                  [&:hover]:font-medium"
                >
                  {tag.name}
                </p>
              </div>
            ))
          }
        </div>

        <div className="flex flex-row items-center gap-4">
          <h3 className={`${styles.projectsHeadText} mb-3`}>
            {project.name}
          </h3>

          <div
            onClick={() => window.open(project.source_code_link, "_blank", "noreferrer")}
            className="rounded-full w-9 h-9 sm:w-10 sm:h-10 bg-gray-100
            flex justify-center items-center cursor-pointer shrink-0 [&:hover]:scale-110 transition duration-300">
            <img
              src={github}
              alt="github logo"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>

        </div>


        <p className={`${styles.projectsDescriptionText} mb-4 md:mb-6 lg:mb-8`}>
          {project.description}
        </p>


        <div className={`mt-auto w-full ${isPortrait ? "max-w-[40%] mx-auto" : null}`}>
          <img
            src={project.image}
            alt={project.image_alt}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </Tilt >)

}

export const Projects = () => {
  return (
    <>
      <motion.div className="mb-8" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl  mx-auto
                  place-items-center items-stretch gap-4  p-5">
        {
          projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              project={project}
            />
          ))
        }
      </div>

    </>
  )
}

export default SectionWrapper(Projects, "projects");
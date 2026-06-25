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

        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className={`${styles.projectsHeadText} mb-3`}>
            {project.name}
          </h3>

          <button
            onClick={() => window.open(project.source_code_link, "_blank", "noreferrer")}
            className={`${styles.githubButtonStyles}`}>
            <a
              href={github}
              //alt="github logo"
              className="flex items-center justify-center"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <a />
          </button>

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
import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { motion, useReducedMotion } from "motion/react"
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-parallax-tilt';
import { github } from "../assets/index.js";

const ProjectCard = ({ index, project }) => {
  {/* flex 
  flex-col 
  h-full 
  w-full 
  max-w-md 
  rounded-lg 
  p-2*/}

  const shouldReduceMotion = useReducedMotion()

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
      `}>

        <div className="flex flex-wrap min-h-5 gap-3 m-3 md:mb-7 xl:mb-9 items-center">
          {
            project.tags.map((tag) => (
              <div className="flex items-center gap-1.5 rounded-3xl 
            shadow-lg [box-shadow:0_4px_30px_rgba(0,0,0,0.3)]
            bg-white/40
            shadow-2xl/20      
            inset-shadow-md
            px-2
            font-semibold
            [&:hover]:scale-110 
            [&:hover]:border-white-100 
            transition 
            duration-300
            ">
                <img src={tag.logo}
                  className="ml-1 w-4 h-4 rounded-md object-contain"
                  alt={tag.name}
                />

                <p
                  key={`${project.name}-${tag.name}`}
                  className="mr-2 text-black md:text-[16px] 
                  sm:text-[14px] xs:text-[14px] 
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
          <h3 className={`${styles.projectsHeadText} mb-1`}>
            {project.name}
          </h3>

          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="rounded-full w-8 h-8 bg-gray-100
            flex justify-center items-center cursor-pointer">
            <img
              src={github}
              alt="github logo"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>

        </div>


        <p className={`${styles.projectsDescriptionText} mb-8 md:mb-7 xl:mb-9`}>
          {project.description}
        </p>


        <div className="mt-auto">
          <img
            src={project.image}
            alt={project.image_alt}
            className={project.name === "Serenify(thesis)"
              ? "w-40 h-50"
              : "w-90 h-50"
            }
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
      {/*grid 
  grid-cols-1 
  md:grid-cols-2 
  max-w-6xl 
  mx-auto 
  items-stretch 
  justify-items-center 
  gap-4 
  p-5 */}
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
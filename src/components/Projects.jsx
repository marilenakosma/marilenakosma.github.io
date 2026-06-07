import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { motion } from "motion/react"
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({ index, project }) => {
  {/* flex 
  flex-col 
  h-full 
  w-full 
  max-w-md 
  rounded-lg 
  p-2*/}
  return (
    <Tilt
      tiltEnable={true}
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="white"
      glarePosition="bottom"
      glareBorderRadius="22px"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="
      w-full
      h-full
      max-w-md
      rounded-lg
      bg-white/20 
      border border-white/50
      shadow-lg
      flex
      flex-col
      backdrop-blur-xl
      items-center
      justify-center
      ">

        <div className="flex flex-wrap gap-3 m-3 items-center">
          {
            project.tags.map((tag) => (
              <div className="flex items-center gap-1.5 rounded-3xl 
            shadow-lg [box-shadow:0_4px_30px_rgba(0,0,0,0.3)]
            bg-white/40
            shadow-2xl/20      
            inset-shadow-md
            px-2
            font-semibold
            cursor-pointer 
            [&:hover]:scale-110 
          [&:hover]:border-white-100 
            transition 
            duration-300
            ">
                <img src={tag.logo}
                  className="ml-1 w-4 h-4 rounded-md"
                />
                <p
                  key={`${project.name}-${tag.name}`}
                  className="mr-2 text-black md:text-[16px] sm:text-[14px] xs:text-[14px] font-light [&:hover]:font-medium"
                >
                  {tag.name}
                </p>
              </div>
            ))
          }
        </div>

        <h1 className={`${styles.projectsHeadText} mb-1`}>
          {project.name}
        </h1>

        <p className={`${styles.projectsDescriptionText} mb-4`}>
          {project.description}
        </p>

        <div className="flex items-end justify-end">
          <img src={project.image}
            className={project.name === "Serenify(thesis)"
              ? "w-40 h-50"
              : "w-90 h-50"
            }
            alt="project image" />
        </div>
      </motion.div>
    </Tilt>)

}

export const Projects = () => {
  return (
    <>
      <motion.div className="mb-8" variants={textVariant()}>
        <p className={styles.sectionHeadText}>
          Projects
        </p>
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
                  place-items-center items-stretch gap-4 lg:gap-7 p-5">
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

export default SectionWrapper(Projects, "Projects");
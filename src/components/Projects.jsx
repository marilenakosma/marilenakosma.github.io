import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { textVariant } from "../utils/motion";
import Grainient from './Grainient';

const ProjectCard = ({project}) => {
  return (<div className=" sm:w-111 w-111 lg:w-111 sm:h-101 lg:h-101 h-101 
      rounded-lg
    bg-[rgba(255,255,255,0.2)] 
      [box-shadow:0_4px_30px_rgba(0,0,0,0.5)]
      border border-blue-200 grid place-items-baseline 
      justify-items-center p-2">
   
  {/* <div>
    {
          project.map((skill,index) => (
            <ProjectCard 
             key={`projects-${index}`}
             project={project}
             />
          ))
        }
   </div> */}

    <h1 className={styles.projectsHeadText}> 
      {project.name}
    </h1>

    <p className={styles.projectsDescriptionText}> 
      {project.description}
    </p>
    
    <img src={project.image} 
         className={ project.name === "Serenify(thesis)"
          ? "w-40 h-50 flex items-end"
          : "w-90 h-50"} 
         alt="project image"/>
  </div>)

}

export const Projects = () => {
  return (
    <>
    <div className="mb-8">
      <p className={styles.sectionHeadText}>
        Projects
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(410px,1fr))]
                  place-items-center gap-4 p-2">
        {
          projects.map((project,index) => (
            <ProjectCard 
             key={`projects-${index}`}
             project={project}
             />
          ))
        }
      </div>

      <div className="mb-30"/>

    </div>
    </>
  )
}

export default Projects;
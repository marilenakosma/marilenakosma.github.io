import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { textVariant } from "../utils/motion";
import Grainient from './Grainient';

const ProjectCard = ({index,name,description,tags,image,source_code_link}) => {
  return (<div className=" sm:w-111 w-111 lg:w-111 sm:h-100 lg:h-101 h-101 
      rounded-lg
    bg-white/20 
      shadow-lg
      border border-blue-200 grid 
      backdrop-blur-xl
      place-items-center">
   
   <div className="flex flex-wrap gap-3 m-3 items-center">
    {
          tags.map((tag) => (
            <div className="flex items-center gap-1.5 rounded-xl 
            shadow-lg [box-shadow:0_4px_30px_rgba(0,0,0,0.3-)]
            border border-white/10 backdrop-blur-lg
            ">
             <img src={tag.logo} 
              className="ml-1 w-4 h-4 rounded-md"
             />
            <p
             key={`${name}-${tag.name}`}
             className="mr-1 text-white font-light"
             >
              {tag.name}
            </p>
            </div>
          ))
        }
   </div> 

    <h1 className={styles.projectsHeadText}> 
      {name}
    </h1>

    <p className={styles.projectsDescriptionText}> 
      {description}
    </p>
    
      <img src={image} 
         className={name === "Serenify(thesis)"
          ? "w-40 h-50 self-end"
          : "w-90 h-50 self-end"
        } 
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
                  place-items-center gap-4">
        {
          projects.map((project,index) => (
            <ProjectCard 
             key={`projects-${index}`}
             index={index}
             {...project}
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
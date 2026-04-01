import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { textVariant } from "../utils/motion";
import Grainient from './Grainient';

const ProjectCard = ({index,name,description,tags,image,source_code_link}) => {
  {/* flex 
  flex-col 
  h-full 
  w-full 
  max-w-md 
  rounded-lg 
  p-2*/}
  return (<div className="
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
          tags.map((tag) => (
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
             key={`${name}-${tag.name}`}
             className="mr-2 text-black md:text-[16px] sm:text-[14px] xs:text-[14px] font-light [&:hover]:font-medium"
             >
              {tag.name}
            </p>
            </div>
          ))
        }
   </div> 

    <h1 className={`${styles.projectsHeadText} mb-1`}> 
      {name}
    </h1>

    <p className={`${styles.projectsDescriptionText} mb-4`}> 
      {description}
    </p>
    
    <div className="flex items-end justify-end">
      <img src={image} 
         className={name === "Serenify(thesis)"
          ? "w-40 h-50"
          : "w-90 h-50"
        } 
         alt="project image"/>
    </div>
  </div>)

}

export const Projects = () => {
  return (
    <>
    <div className="mb-8">
      <p className={styles.sectionHeadText}>
        Projects
      </p>
    </div>
    {/*grid 
  grid-cols-1 
  md:grid-cols-2 
  max-w-6xl 
  mx-auto 
  items-stretch 
  justify-items-center 
  gap-4 
  p-5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto
                  place-items-center items-stretch gap-4 p-5">
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

    </>
  )
}

export default Projects;
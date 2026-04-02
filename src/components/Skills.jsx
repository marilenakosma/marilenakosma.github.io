import React from "react";
import { styles } from "../styles";
import { projects, technologies } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { textVariant } from "../utils/motion";
import Grainient from './Grainient';
import StickerPeel from './StickerPeel'
import { postgresql } from "../assets/index.js";

export const  Skills = () => {
  return (
    <>
    <div className="mb-8">
          <p className={styles.sectionHeadText}>
            Tech
          </p>
        </div>


<div className="mb-8">
    {
          technologies.map((tech) => (
                <StickerPeel
                  imageSrc={tech.icon}
                  width={100}
                  rotate={0}
                  peelBackHoverPct={30}
                  peelBackActivePct={40}
                  shadowIntensity={0.5}
                  lightingIntensity={0.2}
                  initialPosition={{ x: 0, y: 0 }}
                  peelDirection={0}
                />

          ))
        }
</div>
</>
  )
}

export default Skills;
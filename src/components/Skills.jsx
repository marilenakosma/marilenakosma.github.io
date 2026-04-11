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
    <div className="mb-10">
          <p className={styles.sectionHeadText}>
            Technologies
          </p>
          <p className={`${styles.sectionSubText}, text-center`}>
            Made it this far? Here's a sticker!
          </p>
        </div>

<div className="m-30">

</div>
<div className="flex flex-row items-center flex-wrap mb-30">
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
                  initialPosition={tech.initialPosition}
                  peelDirection={0}
                />

          ))
        }
</div>
</>
  )
}

export default Skills;
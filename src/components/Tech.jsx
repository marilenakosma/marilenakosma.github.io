import React from "react";
import { styles } from "../styles.js";
import { projects, technologies } from "../constants/index.js";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { textVariant } from "../utils/motion.js";
import Grainient from './backgrounds/Grainient.jsx';
import StickerPeel from './StickerPeel.jsx'
import { postgresql } from "../assets/index.js";

export const Tech = () => {
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
              key={tech.name}
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

export default Tech;
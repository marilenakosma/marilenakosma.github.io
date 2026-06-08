import React from "react";
import { motion } from "motion/react"
import { styles } from "../styles.js";
import { projects, technologies } from "../constants/index.js";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { fadeIn, textVariant } from "../utils/motion";
import StickerPeel from './StickerPeel.jsx'

export const Tech = () => {
  return (
    <>
      <motion.div className="mb-10" variants={textVariant()}>
        <p className={styles.sectionHeadText}>
          Technologies
        </p>
        <p className={`${styles.sectionSubText}, mt-4`}>
          Made it this far? Here's a sticker!
        </p>
      </motion.div>

      <div className="m-30">

      </div>
      <div className="flex flex-row items-center justify-center flex-wrap gap-4 mb-10 pb-10">
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
              peelDirection={0}
            />

          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "technologies");
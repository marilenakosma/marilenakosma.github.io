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
        <p className={`${styles.sectionSubText} text-center mt-4`}>
          Made it this far? Here's a sticker!
        </p>
      </motion.div>

      <div className="m-30">

      </div>
      <div className="flex flex-row items-center justify-center flex-wrap gap-4 max-w-4xl  mx-auto mb-10 pb-10">
        {
          technologies.map((tech) => (
            <div className="flex flex-col items-center justify-end gap-4">
              <StickerPeel
                key={tech.name}
                aria-label={tech.name}
                imageSrc={tech.icon}
                width={100}
                height={100}
                rotate={0}
                peelBackHoverPct={40}
                peelBackActivePct={40}
                shadowIntensity={0.5}
                lightingIntensity={0.2}
                peelDirection={1}
              />
              <p className="text-white">
                {tech.name}
              </p>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "technologies");
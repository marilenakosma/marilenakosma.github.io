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
        <h2 className={styles.sectionHeadText}>
          Technologies
        </h2>
        <p className={`${styles.sectionSubText} text-center mt-4 mb-16 md:mb-24 lg:mb-30`}>
          Made it this far? Here's a sticker!
        </p>
      </motion.div>

      <div className="flex flex-row justify-center flex-wrap gap-4 max-w-4xl mx-auto mb-4 md:mb-6 lg:mb-8">
        {
          technologies.map((tech) => (
            <div className="flex flex-col items-center justify-end gap-4 mb-7">
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
              <p className="text-white text-[14px] sm:text-[15px]">
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
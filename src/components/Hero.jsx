import { motion } from 'motion/react'

import { styles } from '../styles'
//import { Room } from './canvas/Room'
import Iridescence from './Iridescence';
import LightPillar from './LightPillar';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {/* 3D Model - behind text <div className="absolute inset-0 w-full h-full z-0"> <Room /> </div>  */ }

      <Iridescence
           //color={[1, 1, 1]}
           color={[0.4,0.3,0.7]}
           mouseReact={false}
           amplitude={0.1}
           speed={1.0}
       />
      
      {/* Text content - in front with pointer-events-none */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-5 z-10 pointer-events-none`}> 
        <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
          {/* Left side with circle and line */}
          <div className="flex flex-col justify-center items-center mt-5">
           { /* <div className="w-5 h-5 rounded-full bg-[#915eff]"/> 
            <div className="w-1 sm:h-80 h-40 violet-gradient" /> */ }
          </div>

          {/* Text content */}
          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Marilena</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I know you wonder where I've been
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
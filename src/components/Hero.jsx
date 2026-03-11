import { motion } from 'motion/react'

import { styles } from '../styles'
//import { Room } from './canvas/Room'
import Iridescence from './Iridescence';
import LightPillar from './LightPillar';
import Grainient from './Grainient';

export const Hero = () => {
  return (
    <section className={`relative w-full h-dvh mx-auto`}>
        {/*<Iridescence
           //color={[1, 1, 1]}
           color={[0.4,0.3,0.7]}
           mouseReact={false}
           amplitude={0.1}
           speed={1.0}
       />*/}

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Grainient
    color1="#80ffff"
    color2="#5227ff"
    color3="#B19EEF"
    timeSpeed={0.25}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={5}
    warpSpeed={2}
    warpAmplitude={50}
    blendAngle={0}
    blendSoftness={0.05}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={2}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={0.9}
  />
</div>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          
          {/*<div className='w-5 h-5 rounded-full bg-[#915EFF]' /> 
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div> 

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='decoration-[#F64FFF] underline'>Marilena</span>,
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            a <span className='text-[#F64FFF]'>fullstack</span> developer, who cares about <br></br> UI/UX. I work mainly with React and <br></br>
            React Native, and strive to learn about <br></br> how design decisions affect real users.
          </p>
        </div>
      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
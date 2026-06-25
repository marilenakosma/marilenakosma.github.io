import { motion } from 'motion/react'

import { styles } from '../styles'
import { cv } from '../assets';

export const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      {/*bg-[rgba(0,0,0,0.3)] */}
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX}
         flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-5 text-shadow-lg'>

          {/*<div className='w-5 h-5 rounded-full bg-[#915EFF]' /> 
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white text-shadow-lg`}>
            Hi, I'm <span className='decoration-[#F64FFF] underline'>Marilena</span>,
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-balance text-white-100 text-shadow-lg`}>
            a <span className='text-[#F64FFF]'>fullstack</span> developer who cares about <br></br> UI/UX. I work mainly with React and <br></br>
            React Native, and strive to learn about <br></br> how design decisions affect real users.
          </p>
          <div className='flex flex-row gap-4 md:gap-8 justify-center'>
            <button
              className={`${styles.resumeButtonStyles} mt-8 `}>
              <a href={cv} aria-disabled="true" tabIndex="-1" download={"cv-Maria-Eleni-Kosma.pdf"}>
                Resume
              </a>
            </button>
            <button className={`${styles.projectButtonStyles} mt-8`}>
              <a href="https://github.com/marilenakosma" aria-disabled="true" tabIndex="-1" >
                Github
              </a>
            </button>
          </div>
        </div>
      </div>



      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#education'>
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
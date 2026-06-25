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
              className={`${styles.glassButtonStyles} mt-8 `}>
              <a href={cv} aria-disabled="true" tabIndex="-1" download={"cv-Maria-Eleni-Kosma.pdf"} className="flex flex-row gap-4 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16">
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                </svg>
                Resume
              </a>
            </button>
            <button className={`${styles.projectButtonStyles} mt-8`}>
              <a href="https://github.com/marilenakosma" aria-disabled="true" tabIndex="-1" className="flex flex-row gap-4 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
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

import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles'
//import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion';


 {/* const ServiceCard = ({index,title,icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
               variants={faceIn("right","spring",0.5 * 
               index,1)}
               >

            </motion.div>
        </Tilt>
    )
} */ }
 
export const About = () =>  {
    return (
        <>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
              Introduction
            </p>
            <p className={styles.sectionHeadText}>
              Overview
            </p>
          </motion.div>

          <motion.p
            variants={fadeIn("","",0.1,1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Ena dyo,ena dyo,testing testing,an se xaso tha xatho,an mou peis adioooo,
                tha kopo sta dyo
            </motion.p>

        {/*
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service,index) => (
                    <ServiceCard 
                    key={service.title} 
                    index={index}
                    {...service} />
                ))}
            </div> */}
        </>
    )
}

export default About

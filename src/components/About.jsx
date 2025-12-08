import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion';

export const About = () =>  {
    return (
        <>
        <motion.div>
         <p className={styles.sectionSubText}>
            Introduction
         </p>
        </motion.div>
        </>
    )
}

export default About
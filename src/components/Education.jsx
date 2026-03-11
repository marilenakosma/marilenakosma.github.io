import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { textVariant } from "../utils/motion";


export const Education = () =>  {
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

export default SectionWrapper(Education,"edu")
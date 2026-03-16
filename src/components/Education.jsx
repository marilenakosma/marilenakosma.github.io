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
import Grainient from './Grainient';


export const Education = () =>  {
    return (
            <>
            
              <p className={styles.sectionSubText}>
                    Introduction
               </p>
                <p className={styles.sectionHeadText}>
                  Overview
                </p>
            </>
        )
}

export default Education;
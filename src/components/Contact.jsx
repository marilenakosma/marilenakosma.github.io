import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";
import { textVariant } from "../utils/motion";
import TextInput from "./TextInput.jsx";


export const Contact = () =>  {
    function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
    return (
    <>
    <h1 className={`${styles.sectionHeadText} mb-1 `}>
        Contact 
      </h1>

     <form >
        <div className="flex flex-wrap gap-10 p-3">
              <TextInput type="text" placeholder="First Name" />
              <TextInput type="text" placeholder="Last Name"/>
              <TextInput type="number" placeholder="Phone Number"/>
              <TextInput type="email" placeholder="Email"/>
              <TextInput type="text" placeholder="Message" custom={true} />
        </div>  
     </form>

     <div className="m-35"/>
    </>);
}

export default Contact
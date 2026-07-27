import { useRef, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

import { styles } from "../styles.js";
import { SectionWrapper } from "../utils/SectionWrapper.js";

import TextField from "./ui/TextField.js";

import { motion, useReducedMotion } from "motion/react"
import { textVariant, easeOut } from "../utils/motion.js";


export const Contact = () => {
  const [state, handleSubmit, reset] = useForm("mojyjjvd");

  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset(); //Formspree cleaning (errors,boolean state,etc)
        formRef.current?.reset(); // clearing input field values
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const errorValidation = (name) => {
    return (
      <ValidationError
        prefix={name.charAt(0).toUpperCase() + name.slice(1)}
        field={name}
        errors={state.errors}
      />);
  }

  return (
    <>

      <div className="py-8 lg:py-12 px-4 md:px-8 mx-auto max-w-3xl">
        <form className="space-y-8" ref={formRef} onSubmit={handleSubmit}>
          <motion.fieldset
            variants={textVariant()}>
            <legend
              className={`${styles.sectionHeadText} mb-4 md:mb-6 mt-6 md:mt-10`}>Contact Me
            </legend>
            <h2
              className={`${styles.sectionSubText} text-center mb-5`}>
              Interested in working with me? You can send a message
            </h2>

            <label className="block mb-1 text-sm font-medium text-white">
              First Name:
              <TextField name="FirstName" placeholder="John" labelText="first name" required />
            </label>

            <label className="block mb-1 text-sm font-medium text-white">Last Name:
              <TextField name="LastName" placeholder="Doe" labelText="last name" required />
            </label>

            <label className="block mb-1 text-sm font-medium text-white">Subject:
              <TextField name="Subject" placeholder="I want to talk about..." labelText="Subject" required />
            </label>

            <div className="sm:col-span-2">
              <label className="block mb-1 text-sm font-medium text-white">Message:
                <TextField name="Message" placeholder="Your message here...." as="textarea" labelText="message" required rows={6} />
                {errorValidation("message")}
              </label>
            </div>

            <div className="flex flex-row justify-center mt-4">
              <button type="submit" className={`${styles.glassButtonStyles}`} disabled={state.submitting} aria-busy={state.submitting}>
                {state.submitting ? "Sending..." : "Submit"}
              </button>
            </div>
            {state.succeeded ?
              <p role="status" className="text-center text-white text-lg text-bold">
                Thanks for sending a message! Form will reset shortly...
              </p> :
              null}
          </motion.fieldset>
        </form>
      </div>

    </>);
}

export default SectionWrapper(Contact, "contact")
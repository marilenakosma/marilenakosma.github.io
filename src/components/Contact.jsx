import { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

import { styles } from "../styles";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";

import TextInput from "./ui/TextField.jsx";


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
      <h2 className={`${styles.sectionHeadText} mb-5 mt-10 `}>
        Contact
      </h2>

      <h2 className={`${styles.sectionSubText} text-center mb-5`}>
        Interested in working with me? You can send a message
      </h2>

      <div className="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
        <form className="space-y-8" ref={formRef} onSubmit={handleSubmit}>

          <TextInput name="FirstName" placeholder="John" labelText="first name" required />
          <TextInput name="LastName" placeholder="Doe" labelText="last name" required />
          { /*<TextInput name="email" type="email" placeholder="john@mail.com" labelText="email" required />
          {errorValidation("email")} */}
          <TextInput name="subject" type="subject" placeholder="I want to talk about..." labelText="Subject" required />
          <div className="sm:col-span-2">
            <TextInput name="Message" placeholder="Your message here...." as="textarea" labelText="message" required rows={4} />
            {errorValidation("message")}
          </div>

          <div className="flex flex-row justify-center mt-4">
            <button type="submit" className={`${styles.resumeButtonStyles}`} disabled={state.submitting} aria-busy={state.submitting}>
              {state.submitting ? "Sending..." : "Submit"}
            </button>
          </div>
          {state.succeeded ?
            <p className="text-center text-white text-large">
              Thanks for sending a message! Form will reset shortly...
            </p> :
            null}
        </form>
      </div>

    </>);
}

export default SectionWrapper(Contact, "contact")
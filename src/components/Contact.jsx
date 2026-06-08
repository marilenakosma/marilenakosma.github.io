import React from "react";
import { useForm, ValidationError } from '@formspree/react';

import { styles } from "../styles";
import { SectionWrapper } from "../utils/SectionWrapper.jsx";

import TextInput from "./ui/TextField.jsx";


export const Contact = () => {
  const [submit, handleSubmit] = useForm("mojyjjvd");
  if (submit.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  const errorValidation = (name) => {
    return (
      <ValidationError
        prefix={name.charAt(0).toUpperCase() + name.slice(1)}
        field={name}
        errors={submit.errors}
      />);
  }

  return (
    <>
      <h1 className={`${styles.sectionHeadText} mb-5 mt-10 `}>
        Contact
      </h1>

      <h2 className={`${styles.sectionSubText} text-center mb-5`}>
        Interested in working with me? You can send a message
      </h2>

      <div className="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
        <form className="space-y-8" onSubmit={handleSubmit}>

          <TextInput name="FirstName" placeholder="John" labelText="first name" required />
          <TextInput name="LastName" placeholder="Doe" labelText="last name" required />
          <TextInput name="Email" type="email" placeholder="john@mail.com" labelText="email" required />
          {errorValidation("email")}
          <div className="sm:col-span-2">
            <TextInput name="Message" placeholder="Your message here...." as="textarea" labelText="message" required rows={4} />
            {errorValidation("message")}
          </div>

          <div className="flex flex-row justify-center mt-4">
            <button type="submit" className={`${styles.resumeButtonStyles}`} disabled={submit.submitting}>
              Submit
            </button>
          </div>
        </form>
      </div>



      <div className="m-10" />


    </>);
}

export default SectionWrapper(Contact, "contact")
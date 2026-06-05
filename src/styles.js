const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  
  /* [box-shadow:0_4px_30px_rgba(0,0,0,0.5)] */
  glassBg:
   "bg-white/20 bg-[rgba(0,0,0,0.4)] backdrop-blur-xl",
  heroHeadText:
    "font-black text-white lg:text-7xl sm:text-6xl xs:text-5xl text-4xl lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-regular lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white text-center font-black text-4xl md:text-5xl lg:text-6xl",
  sectionSubText:
    "mb-8 text-secondary sm:text-xl",

  resumeButtonStyles:
   "rounded-xl px-6 py-3 font-medium shadow-2xl/20 inset-shadow-current/20 backdrop-blur-sm bg-white/60 inset-shadow-sm text- w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  resumeButtonStylesAlt:
    "rounded-3xl border border-(--glass-border) px-6 py-3 font-semibold shadow-2xl/20 inset-shadow-current/20 backdrop-blur-sm bg-(--glass-bg) inset-shadow-sm text-white w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  projectButtonStyles:
  "rounded-xl px-6 py-3 font-medium  inset-shadow-current/20 backdrop-blur-sm bg-black inset-shadow-sm text-white w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",

  educationHeadText:
     "text-white text-center font-semibold md:text-[20px] sm:text-[18px] xs:text-[10px] flex-1",
  educationDescriptionText:
      "text-white text-balance font-light m-2  md:text-[18px] sm:text-[16px] text-secondary tracking-wider flex-1",
  educationDateText:
     "text-white font-semibold md:text-[20px] sm:text-[16px] xs:text-[10px]",

  educationContainerAlt:
  "sm:w-55 xs:w-65 w-65 lg:w-55 @3xs:h-80 @xs:h-80 sm:h-80 rounded-lg bg-white [box-shadow:0_4px_30px_rgba(0,0,0,0.5)] border border-blue-200 flex flex-col shrink basis-auto items-center p-2",
  educationHeadTextAlt:
     "text-black text-center font-semibold md:text-[20px] sm:text-[16px] xs:text-[10px] flex-1",
  educationDescriptionTextAlt:
      "text-black  font-light m-2  md:text-[18px] sm:text-[14px] text-secondary tracking-wider flex-1",
  educationDateTextAlt:
     "text-black font-semibold md:text-[20px] sm:text-[16px] xs:text-[10px]",

  projectTags:
  "flex items-center gap-1.5 rounded-3xl shadow-lg [box-shadow:0_4px_30px_rgba(0,0,0,0.3)] bg-white/40 shadow-2xl/20 inset-shadow-md px-2 font-semibold cursor-pointer [&:hover]:scale-110 [&:hover]:border-white-100 transition duration-300",
  projectsHeadText:
     "text-white font-semibold md:text-[24px] sm:text-[20px] xs:text-[18px]",
  projectsDescriptionText:
      "text-white text-center text-balance font-light md:text-[18px] sm:text-[16px] xs:text-[14px] text-secondary",

};

export { styles };

{/*   <div class="py-8 lg:py-16 px-4 mx-auto max-w-3xl">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
                </label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>*/}
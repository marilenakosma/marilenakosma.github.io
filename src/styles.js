const styles = {
  paddingX: `sm:px-16 px-6`,
  paddingY: `sm:py-16 py-6`,
  padding: `sm:px-16 px-6 sm:py-16 py-10`,

  /* [box-shadow:0_4px_30px_rgba(0,0,0,0.5)] */
  /* border-[rgba(255,255,255,0.3)] */
  glassBg:
    `bg-white/20 bg-[rgba(0,0,0,0.4)] bg-white/15`,
  glassNavbarBorder:
    `border border-transparent border-b-white/50`,
  glassBorder:
    `border border-white/50`,
  glassProjectTagsBg:
    `bg-white/50 shadow-lg bg-[rgba(0,0,0,0.4)] shadow-2xl/20 inset-shadow-md`,

  heroHeadText:
    `font-black text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight 
     sm:leading-tight lg:leading-[98px] mt-2`,
  heroSubText:
    `text-[#dfd9ff] font-regular text-wrap text-lg xs:text-lg sm:text-xl 
     sm:leading-relaxed md:leading-relaxed md:text-2xl lg:text-3xl lg:leading-[42px]
     tracking-wider sm:tracking-normal md:tracking-normal lg:tracking-normal`,

  sectionHeadText:
    `text-white text-center font-black text-4xl leading-tight md:text-5xl lg:text-6xl`,
  sectionSubText:
    `mb-8 text-secondary text-lg md:text-lg lg:text-xl`,

  glassButtonStyles:
    `relative rounded-3xl px-4 py-2 md:px-6 md:py-3 font-medium 
     shadow-2xl/20 inset-shadow-current/20 
     bg-gray-200 inset-shadow-xs w-fit cursor-pointer 
     [&:hover]:scale-110 transition duration-300
     before:absolute before:inset-0 before:bg-linear-to-b
     before:from-white/40 before:to-transparent hover:bg-white
     active:bg-gray-200 active:shadow-none
     active:inset-shadow-gray-300 overflow-hidden`,
  projectButtonStyles:
    `relative rounded-3xl px-4 py-2 md:px-6 md:py-3 font-medium  
     bg-black text-white w-fit cursor-pointer [&:hover]:scale-110 transition duration-300
    shadow-md inset-shadow-xs inset-shadow-neutral-600 
    before:absolute before:inset-0 before:bg-linear-to-b
    before:from-white/20 before:to-transparent hover:bg-neutral-800
    active:bg-neutral-950 active:shadow-none
    active:inset-shadow-neutral-800 overflow-hidden`,
  footerButtonStyles:
    `relative rounded-3xl px-3 py-2 md:px-4 md:py-2 font-medium 
    inset-shadow-sm text-w-fit text-neutral-900 bg-gray-100 overflow-hidden
    cursor-pointer [&:hover]:scale-110 transition duration-300
    shadow-md inset-shadow-2xs inset-shadow-white transition-all
    before:absolute before:inset-0 before:bg-linear-to-b
    before:from-white/20 before:to-transparent hover:bg-white
    active:bg-gray-200 active:shadow-none
    active:inset-shadow-gray-300`,
  linkedinFooterButtonStyles:
    `relative rounded-3xl px-3 py-2 md:px-4 md:py-2 font-medium 
    inset-shadow-sm text-w-fit text-white bg-blue-600 overflow-hidden
    cursor-pointer [&:hover]:scale-110 transition duration-300
    shadow-md inset-shadow-2xs inset-shadow-blue-400 transition-all
    before:absolute before:inset-0 before:bg-linear-to-b
    before:from-white/20 before:to-transparent hover:bg-blue-500
    active:bg-blue-700 active:shadow-none
    active:inset-shadow-blue-800`,
  githubFooterButtonStyles:
    `relative rounded-3xl px-5 py-2 md:px-4 md:py-2 font-medium 
    inset-shadow-sm text-w-fit text-neutral-100 bg-black overflow-hidden
    cursor-pointer [&:hover]:scale-110 transition duration-300
    shadow-md inset-shadow-2xs inset-shadow-neutral-600 transition-all
    before:absolute before:inset-0 before:bg-linear-to-b
    before:from-white/20 before:to-transparent hover:bg-neutral-800
    active:bg-neutral-950 active:shadow-none
    active:inset-shadow-neutral-800`,
  submitButtonStyles:
    `rounded-3xl px-4 py-2 md:px-6 md:py-3 font-medium shadow-2xl/20 inset-shadow-current/20 
    bg-gray-300 inset-shadow-sm text- w-fit cursor-pointer [&:hover]:scale-110 transition 
    duration-300`,

  educationHeadText:
    `text-white text-center font-semibold text-lg xs:text-base sm:text-lg md:text-xl flex-1 mb-2 mr-2 ml-2`,
  educationDescriptionText:
    `text-white text-balance font-light m-1 xs:m-6 sm:m-4 md:m-2 text-base leading-relaxed 
    sm:text-base md:text-lg text-secondary tracking-wider flex-1`,
  educationDateText:
    `text-white font-semibold text-base sm:text-base md:text-lg mt-2`,

  projectTags:
    `flex items-center gap-1.5 rounded-3xl shadow-lg [box-shadow:0_4px_30px_rgba(0,0,0,0.3)] 
    bg-white/40 shadow-2xl/20 inset-shadow-md px-2 font-semibold cursor-pointer 
    [&:hover]:scale-110 [&:hover]:border-white-100 transition duration-300`,
  projectsHeadText:
    `text-white font-semibold text-xl sm:text-xl md:text-xl mt-4 sm:mt-6 md:mt-3 lg:mt-4 object-contain`,
  projectsDescriptionText:
    `text-white text-center text-lg text-balance p-1 lg:pl-5 lg:pr-5 font-light 
     leading-relaxed sm:text-lg md:text-lg text-secondary tracking-wider`,
  githubButtonStyles:
    `relative rounded-3xl w-11 h-11 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:h-9 w-9
     bg-gray-100 flex justify-center items-center  
     shadow-inner text-gray-8
     cursor-pointer shrink-0 
     [&:hover]:scale-110 transition duration-300 
     border border-gray-400 rounded shadow
    `,
  githubButtonAltStyles:
    `relative cursor-pointer overflow-hidden rounded-border
    border-neutral-950 bg-neutral-900 rounded-3xl w-9 h-9 sm:w-10 sm:h-10 
    text-neutral-100
    shadow-md inset-shadow-2xs inset-shadow-neutral-600 transition-all
    before:absolute before:inset-0 before:bg-linear-to-b
    before:from-white/20 before:to-transparent hover:bg-neutral-800
    active:bg-neutral-950 active:shadow-none
    active:inset-shadow-neutral-800
    [&:hover]:scale-110 transition duration-300 `,

};

export { styles };
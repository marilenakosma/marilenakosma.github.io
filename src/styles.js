const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  /* [box-shadow:0_4px_30px_rgba(0,0,0,0.5)] */
  /* border-[rgba(255,255,255,0.3)] */
  glassBg:
    "bg-white/20 bg-[rgba(0,0,0,0.4)] backdrop-blur-xl",
  glassNavbarBorder:
    "border border-transparent border-b-white/50",
  glassBorder:
    "border border-white/50",
  glassProjectTagsBg:
    "bg-white/50 shadow-lg bg-[rgba(0,0,0,0.4)] shadow-2xl/20 inset-shadow-md",

  heroHeadText:
    "font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-snug lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-regular text-base xs:text-xl sm:text-xl sm:leading-relaxed md:leading-relaxed md:text-2xl lg:text-3xl lg:leading-[42px]",

  sectionHeadText:
    "text-white text-center font-black text-4xl leading-tight md:text-5xl lg:text-6xl",
  sectionSubText:
    "mb-8 text-secondary text-base md:text-lg lg:text-xl",

  glassButtonStyles:
    "rounded-3xl px-4 py-2 md:px-6 md:py-3 font-medium shadow-2xl/20 inset-shadow-current/20 backdrop-blur-sm bg-white/60 inset-shadow-sm text- w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  footerButtonStyles:
    "rounded-3xl px-3 py-2 md:px-4 md:py-2 font-medium shadow-2xl/20 inset-shadow-current/20 backdrop-blur-sm bg-white/60 inset-shadow-sm text-w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  resumeButtonStylesAlt:
    "rounded-3xl border border-(--glass-border) px-6 py-3 font-semibold shadow-2xl/20 inset-shadow-current/20 backdrop-blur-sm bg-(--glass-bg) inset-shadow-sm text-white w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  projectButtonStyles:
    "rounded-3xl px-4 py-2 md:px-6 md:py-3 font-medium  inset-shadow-current/20 backdrop-blur-sm bg-black inset-shadow-sm text-white w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  submitButtonStyles:
    "rounded-3xl px-4 py-2 md:px-6 md:py-3 font-medium shadow-2xl/20 inset-shadow-current/20 backdrop-blur-sm bg-white/60 inset-shadow-sm text- w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  githubButtonStyles:
    "rounded-3xl w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 flex justify-center items-center  inset-shadow-current/20 backdrop-blur-sm bg-(--glass-bg) inset-shadow-sm cursor-pointer shrink-0 [&:hover]:scale-110 transition duration-300",

  educationHeadText:
    "text-white text-center font-semibold text-base sm:text-lg md:text-xl flex-1",
  educationDescriptionText:
    "text-white text-balance font-light m-2 text-[15px] leading-relaxed sm:text-base md:text-lg text-secondary tracking-wider flex-1",
  educationDateText:
    "text-white font-semibold text-sm sm:text-base md:text-lg mt-2",

  educationContainerAlt:
    "sm:w-55 xs:w-65 w-65 lg:w-55 @3xs:h-80 @xs:h-80 sm:h-80 rounded-lg bg-white [box-shadow:0_4px_30px_rgba(0,0,0,0.5)] border border-blue-200 flex flex-col shrink basis-auto items-center p-2",
  educationHeadTextAlt:
    "text-black text-center font-semibold text-sm sm:text-base md:text-xl flex-1",
  educationDescriptionTextAlt:
    "text-black font-light m-2 text-[15px] leading-relaxed md:text-lg md:leading-loose text-secondary tracking-wider flex-1",
  educationDateTextAlt:
    "text-black font-semibold text-sm sm:text-base md:text-lg",

  projectTags:
    "flex items-center gap-1.5 rounded-3xl shadow-lg [box-shadow:0_4px_30px_rgba(0,0,0,0.3)] bg-white/40 shadow-2xl/20 inset-shadow-md px-2 font-semibold cursor-pointer [&:hover]:scale-110 [&:hover]:border-white-100 transition duration-300",
  projectsHeadText:
    "text-white font-semibold text-lg sm:text-xl md:text-2xl mt-3",
  projectsDescriptionText:
    "text-white text-center text-balance p-1 lg:pl-5 lg:pr-5 font-light text-[15px] sm:text-base md:text-lg text-secondary",

};

export { styles };
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  /* [box-shadow:0_4px_30px_rgba(0,0,0,0.5)] */
  /* border-[rgba(255,255,255,0.3)] */
  glassBg:
    "bg-white/20 bg-[rgba(0,0,0,0.4)] bg-white/15-blur-xl",
  glassNavbarBorder:
    "border border-transparent border-b-white/50",
  glassBorder:
    "border border-white/50",
  glassProjectTagsBg:
    "bg-white/50 shadow-lg bg-[rgba(0,0,0,0.4)] shadow-2xl/20 inset-shadow-md",

  heroHeadText:
    "font-black text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-regular text-base text-wrap xs:text-lg sm:text-xl sm:leading-relaxed md:leading-relaxed md:text-2xl lg:text-3xl lg:leading-[42px]",

  sectionHeadText:
    "text-white text-center font-black text-4xl leading-tight md:text-5xl lg:text-6xl",
  sectionSubText:
    "mb-8 text-secondary text-base md:text-lg lg:text-xl",

  glassButtonStyles:
    "rounded-3xl px-4 py-2 md:px-6 md:py-3 font-medium shadow-2xl/20 inset-shadow-current/20 bg-white/15-blur-sm bg-gray-100 inset-shadow-sm text- w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  footerButtonStyles:
    "rounded-3xl px-3 py-2 md:px-4 md:py-2 font-medium shadow-2xl/20 inset-shadow-current/20 bg-white/15-blur-sm bg-gray-100 inset-shadow-sm text-w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  projectButtonStyles:
    "rounded-3xl px-4 py-2 md:px-6 md:py-3 font-medium  inset-shadow-current/20 bg-white/15-blur-sm bg-black inset-shadow-sm text-white w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",
  submitButtonStyles:
    "rounded-3xl px-4 py-2 md:px-6 md:py-3 font-medium shadow-2xl/20 inset-shadow-current/20 bg-white/15-blur-sm bg-gray-100 inset-shadow-sm text- w-fit cursor-pointer [&:hover]:scale-110 transition duration-300",

  educationHeadText:
    "text-white text-center font-semibold text-base sm:text-lg md:text-xl flex-1",
  educationDescriptionText:
    "text-white text-balance font-light m-1 xs:m-6 sm:m-4 md:m-2 text-[15px] leading-relaxed sm:text-base md:text-lg text-secondary tracking-wider flex-1",
  educationDateText:
    "text-white font-semibold text-sm sm:text-base md:text-lg mt-2",

  projectTags:
    "flex items-center gap-1.5 rounded-3xl shadow-lg [box-shadow:0_4px_30px_rgba(0,0,0,0.3)] bg-white/40 shadow-2xl/20 inset-shadow-md px-2 font-semibold cursor-pointer [&:hover]:scale-110 [&:hover]:border-white-100 transition duration-300",
  projectsHeadText:
    "text-white font-semibold text-base sm:text-lg md:text-xl mt-3 object-contain",
  projectsDescriptionText:
    "text-white text-center text-balance p-1 lg:pl-5 lg:pr-5 font-light text-[15px] leading-relaxed sm:text-base md:text-lg text-secondary tracking-wider",
  githubButtonStyles:
    "rounded-3xl w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 flex justify-center items-center  inset-shadow-current/20  bg-(--glass-bg) inset-shadow-sm cursor-pointer shrink-0 [&:hover]:scale-110 transition duration-300",

};

export { styles };
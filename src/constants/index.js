import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  github,
  figma,
  docker,
  brasov,
  firebase,
  java,
  javaTech,
  csharp,
  mmkv,
  net,
  openstreetmap,
  postgresql,
  python,
  rn,
  rn2,
  sqlite,
  udemy,
  uxcel,
  regeneration,
  scrimba,
  vue,
  zustand,
  angular,
  rabbitmq,
  sqlserver,
  pada,
  pada2,
  opentrivia,
  serenifyFull,
  serenifySmall,
  quizgameFull,
  touristguideSmall,
  recipeFull,
  doctor,
  asyncstorage
} from "../assets";

export const navLinks = [
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

/*
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];
*/
const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "Vue JS",
    icon: vue
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Angular JS",
    icon: angular
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Java",
    icon: javaTech
  },
  {
    name: "C#",
    icon: csharp
  },
  {
    name: "Github",
    icon: github
  },
  {
    name: "Figma",
    icon: figma
  },
  {
    name: "Docker",
    icon: docker
  },
];


const education = [
  {
    logo: pada,
    name: "University of West Attica",
    description: "Computer Science and Engineering",
    date: "2020 - 2026"
  },
  {
    logo: brasov,
    name: "University of Brasov",
    description: "Erasmus+ program",
    date: "2025"
  },
  /* {
     logo: udemy,
     name: "Udemy",
     description: "The Complete Full-Stack Web Development",
     date: "2025"
   },
   {
     logo: scrimba,
     name: "Scrimba",
     description: "React.js",
     date: "2025"
   },
   {
     logo: uxcel,
     name: "Uxcel",
     description: "UI/UX Design",
     date: "2026"
   }, */
  {
    logo: regeneration,
    name: "Regeneration Academy",
    description: "Full Stack Development with .NET and Angular",
    date: "2026",
  }

]

/*
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
*/
const projects = [
  {
    name: "Serenify(thesis)",
    description:
      "A mobile self-care helper designed to support users' mental well-being through daily activities.",
    tags: [
      {
        logo: rn2,
        name: "React Native",
      },
      {
        logo: firebase,
        name: "Firebase",
      },
      {
        logo: mmkv,
        name: "MMKV",
      },
      {
        logo: asyncstorage,
        name: "Async Storage"
      },
      {
        logo: zustand,
        name: "Zustand",
      },
    ],
    image: serenifySmall,
    image_alt: "An image depicting a mental health app with mood selection",
    source_code_link: "https://github.com/marilenakosma/Serenify",
  },
  {
    name: "DoctorEverywhere",
    description:
      "A location-aware doctor appointment booking system,created with fellow Regeneneration colleagues.",
    tags: [
      {
        logo: csharp,
        name: "ASP.NET(C#)",
      },
      {
        logo: sqlserver,
        name: "SQL Server",
      },
      {
        logo: angular,
        name: "Angular",
      },
      {
        logo: docker,
        name: "Docker",
      },
      {
        logo: rabbitmq,
        name: "RabbitMQ",
      },
    ],
    image: doctor,
    image_alt: "An image depicting booking doctor appointments in an interactive map",
    source_code_link: "https://github.com/DoctorEverywhere",
  },
  {
    name: "Tourist Guide",
    description:
      "A desktop application that simulates transportation between major Romanian cities.",
    tags: [
      {
        logo: java,
        name: "Java Swing",
      },
      {
        logo: openstreetmap,
        name: "Open Street Map",
      },
      {
        logo: java,
        name: "Flatlaf",
      },
    ],
    image: touristguideSmall,
    image_alt: "An image depicting tourist attraction in an interactive map of Brasov,Romania",
    source_code_link: "https://github.com/marilenakosma/TouristGuide/",
  },
  {
    name: "Quiz Game",
    description:
      "A Python-powered interactive desktop quiz application.",
    tags: [
      {
        logo: python,
        name: "Python",
      },
      {
        logo: python,
        name: "PyQt6",
      },
      {
        logo: sqlite,
        name: "SQlite",
      },
      {
        logo: opentrivia,
        name: "Open Trivia DB"
      }
    ],
    image: quizgameFull,
    image_alt: "An image depicting category selection in a quiz game",
    source_code_link: "https://github.com/marilenakosma/QuizGame",
  },
  /* {
     name: "Recipe Suggestions",
     description:
       "A website that suggests recipes based on ingredients,created with fellow university colleagues.",
     tags: [
       {
         logo: csharp,
         name: "ASP.NET(C#)",
       },
       {
         logo: postgresql,
         name: "PostgreSQL",
       },
       {
         logo: vue,
         name: "Vue",
       },
     ],
     image: recipeFull,
     source_code_link: "https://github.com/marilenakosma/RecipeSuggestionsProject",
   },
   */
];

export { education, technologies, projects };
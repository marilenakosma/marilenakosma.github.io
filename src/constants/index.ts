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
    logo_alt: "University of West Attica logo",
    name: "University of West Attica",
    description: "Informatics and Computer Engineering",
    date: "2020 - 2026"
  },
  {
    logo: brasov,
    logo_alt: "University of Brasov logo",
    name: "University of Brasov(Erasmus+)",
    description: "Electrical Engineering and Computer Science",
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
    logo_alt: "Regeneration logo",
    name: "Regeneration Academy",
    description: "Full Stack Development with .NET and Angular",
    date: "2026",
  }

]


const projects = [
  {
    name: "Serenify(thesis)",
    description:
      "A mobile self-care helper designed to support users' mental well-being through daily activities.",
    tags: [
      {
        logo: rn2,
        logo_alt: "React Native logo",
        name: "React Native",
      },
      {
        logo: firebase,
        logo_alt: "Firebase logo",
        name: "Firebase",
      },
      {
        logo: mmkv,
        logo_alt: "MMKV logo",
        name: "MMKV",
      },
      {
        logo: asyncstorage,
        logo_alt: "Async Storage logo",
        name: "Async Storage"
      },
      {
        logo: zustand,
        logo_alt: "Zustand logo",
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
        logo_alt: "C# logo",
        name: "ASP.NET(C#)",
      },
      {
        logo: sqlserver,
        logo_alt: "Sql Server logo",
        name: "SQL Server",
      },
      {
        logo: angular,
        logo_alt: "Angular logo",
        name: "Angular",
      },
      {
        logo: docker,
        logo_alt: "Docker logo",
        name: "Docker",
      },
      {
        logo: rabbitmq,
        logo_alt: "RabbitMQ logo",
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
        logo_alt: "Java Swing logo",
        name: "Java Swing",
      },
      {
        logo: openstreetmap,
        logo_alt: "Open Street Map logo",
        name: "Open Street Map",
      },
      {
        logo: java,
        logo_alt: "Flatlaf logo",
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
        logo_alt: "Python logo",
        name: "Python",
      },
      {
        logo: python,
        logo_alt: "Python logo",
        name: "PyQt6",
      },
      {
        logo: sqlite,
        logo_alt: "Sq Lite logo",
        name: "SQlite",
      },
      {
        logo: opentrivia,
        logo_alt: "Open Trivia DB logo",
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
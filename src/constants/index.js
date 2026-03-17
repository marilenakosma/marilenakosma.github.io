import {
  mobile,
  backend,
  creator,
  web,
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
  vue,
  zustand,
  pada,
  pada2,
  opentrivia,
  serenify-full,
  serenify-small,
  quizgame-full,
  touristguide-small,
  recipe-full,
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

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    name: "Transilvania University of Brasov",
    description: "Erasmus+ program",
    date: "2025"
  },
  {
    logo: pada,
    name: "Udemy",
    description: "The Complete Full-Stack Web Development",
    date: "2025"
  },
  {
    logo: pada,
    name: "Uxcel",
    description: "UI/UX Design",
    date: "2026"
  },

]

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

const projects = [
  {
    name: "Serenify(thesis)",
    description:
      "A gamified mental health application featuring various self care activities.",
    tags: [
      {
        logo: rn2,
        name: "React Native",
        //color: "blue-text-gradient",
      },
      {
        logo: firebase,
        name: "Firebase",
        //color: "green-text-gradient",
      },
      {
        logo: mmkv,
        name: "MMKV",
        //color: "pink-text-gradient",
      },
      {
        logo: zustand,
        name: "Zustand",
        //color: "pink-text-gradient",
      },
    ],
    image: serenify-full,
    source_code_link: "https://github.com/marilenakosma/Serenify",
  },
  {
    name: "Tourist Guide",
    description:
      "A desktop application that simulates transportation between major Romanian cities.",
    tags: [
      {
        logo: java,
        name: "Java Swing",
        //color: "blue-text-gradient",
      },
      {
        logo: openstreetmap,
        name: "Open Street Map",
        //color: "green-text-gradient",
      },
      {
        logo: java,
        name: "Flatlaf",
        //color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/marilenakosma/TouristGuide/blob/main/README.md",
  },
  {
    name: "Quiz Game",
    description:
      "A Python-powered interactive desktop quiz application.",
    tags: [
      {
        logo: python,
        name: "Python",
        //color: "blue-text-gradient",
      },
      {
        logo: python,
        name: "PyQt",
        //color: "green-text-gradient",
      },
      {
        logo: sqlite,
        name: "sqlite",
        //color: "pink-text-gradient",
      },
      {
        logo: opentrivia,
        name:"Open Trivia DB"
      }
    ],
    image: quizgame-full,
    source_code_link: "https://github.com/marilenakosma/QuizGame",
  },
  {
    name: "Recipe Suggestions",
    description:
      "A website that suggests recipes based on ingredients,created with fellow university colleagues.",
    tags: [
      {
        logo: net,
        name: "ASP.NET(C#)",
        //color: "blue-text-gradient",
      },
      {
        logo: postgresql,
        name: "PostgreSQL",
        //color: "green-text-gradient",
      },
      {
        logo: vue,
        name: "vue",
        //color: "pink-text-gradient",
      },
    ],
    image: recipe-full,
    source_code_link: "https://github.com/marilenakosma/RecipeSuggestionsProject",
  },
];

export { services, technologies, experiences, testimonials, projects };
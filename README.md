# Portfolio Website

My personal portfolio,built on **React + Vite**, blending glassmorphism,3D visuals, smooth animations, and accessible design.

---

## Technologies Used

[![React](https://img.shields.io/badge/React-v19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-v7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-v0.181-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Motion](https://img.shields.io/badge/Motion-v12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-v3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)

- **React 19** – UI component framework
- **Vite 7** – Build tool & dev server
- **TailwindCSS v4** – Utility-first styling
- **Three.js / OGL** – WebGL 3D background rendering
- **Motion (Framer Motion)** – Declarative animations
- **GSAP** – Timeline-based animation sequences
- **Formspree** – Serverless contact form backend
- **React Parallax Tilt** – Tilt & glare card effects

---

## Project Structure

```
PersonalProfile/
├── src/
│   ├── App.jsx                   # Root component: routing, layout, WebGL background
│   ├── main.jsx                  # Application entry point
│   ├── index.css                 # Global styles & CSS variables
│   ├── styles.js                 # Shared Tailwind class strings (glassBg, heroHeadText, etc.)
│   │
│   ├── components/               # All UI sections and reusable elements
│   │   ├── Hero.jsx              # Landing section with intro text and CTA buttons
│   │   ├── Education.jsx         # Academic timeline with tilt cards
│   │   ├── Tech.jsx              # Technology sticker wall
│   │   ├── Projects.jsx          # Project showcase cards with glare effect
│   │   ├── Contact.jsx           # Formspree-powered contact form
│   │   ├── Navbar.jsx            # Responsive navigation bar
│   │   ├── Footer.jsx            # Site footer with social links
│   │   ├── StickerPeel.jsx       # Custom CSS peelable sticker component
│   │   ├── StickerPeel.css       # Sticker peel animation styles
│   │   ├── backgrounds/
│   │   │   └── Iridescence.jsx   # WebGL iridescent shader background (OGL)
│   │   └── ui/
│   │       ├── button.tsx        # Reusable button component (shadcn/radix)
│   │       └── TextField.jsx     # Styled text input component
│   │
│   ├── constants/
│   │   └── index.js              # Centralised data: navLinks, education, technologies, projects
│   │
│   ├── utils/
│   │   ├── SectionWrapper.jsx    # HOC for scroll-animated section containers
│   │   └── motion.js             # Framer Motion variant factories (fadeIn, textVariant, etc.)
│   │
│   ├── assets/                   # Images, icons, fonts, CV PDF
│   └── lib/                      # Shared utility functions
│
├── public/                       # Static assets served at root (logo.svg, favicon)
├── index.html                    # HTML shell with SEO meta tags & font loading
├── vite.config.js                # Vite build configuration with image optimiser plugin
├── tailwind.config.cjs           # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript compiler options
├── eslint.config.js              # ESLint rules for React + hooks
└── package.json                  # Dependencies, scripts, and project metadata
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/marilenakosma/marilenakosma.github.io.git
   cd marilenakosma.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

### Available Scripts

| Script            | Purpose                                                         |
| -------------------| -----------------------------------------------------------------|
| `npm run dev`     | Starts the Vite development server with hot module replacement. |
| `npm run build`   | Compiles and optimises the application for production.          |
| `npm run preview` | Serves the production build locally for verification.           |
| `npm run lint`    | Runs ESLint across all source files.                            |

---

## Live Demo

**[marilenakosma.github.io](https://marilenakosma.github.io/)**

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

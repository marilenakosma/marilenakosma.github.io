import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from 'react-router'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
//import { About } from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Tech from './components/Tech'
import Grainient from './components/backgrounds/Grainient';
import Pattern from './components/Pattern';
import Iridescence from './components/backgrounds/Iridescence'
import Footer from './components/Footer'
const App = () => {
  const [webGlSupported, setWebglSupported] = useState(true)
  return (
    <>
      <BrowserRouter>
        <div className="fixed inset-0 -z-3">
          {webGlSupported ? (
            <Iridescence
              color={[0.3, 0.4, 0.7]}
              mouseReact={false}
              amplitude={0.1}
              speed={1.0}
              onWebGLUnsupported={() => setWebglSupported(false)}
            />
          ) : (
            // CSS-only fallback 
            <div className="w-full h-full bg-linear-to-r/srgb from-indigo-500 to-teal-600" />
          )}
        </div>
        <div>
          {/*<div className="bg-linear-to-r from-cyan-500 to-blue-500">*/}
          <Navbar />
          <Hero />
        </div >
        <Education />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
        {/*} </div> */}
      </BrowserRouter>
    </>
  )
}

export default App

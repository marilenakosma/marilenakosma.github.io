import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Tech from './components/Tech'
import FluidBackground from './components/backgrounds/FluidBackground'
import Footer from './components/Footer'
const App = () => {
  const [webGlSupported, setWebglSupported] = useState(true)
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[100vh] -z-10">
        {webGlSupported ? (
          <FluidBackground
            onWebGLUnsupported={
              () =>
                setWebglSupported(false)} />
        ) : (
          // CSS fallback 
          <div className="w-full h-full bg-linear-to-r/srgb from-indigo-500 to-teal-600" />
        )}
      </div>
      <Navbar />
      <Hero />
      <Education />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App

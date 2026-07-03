import { useState } from 'react'
import { BrowserRouter } from 'react-router'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Tech from './components/Tech'
import Iridescence from './components/backgrounds/Iridescence'
import FluidBackground from './components/backgrounds/FluidBackground'
import Footer from './components/Footer'
const App = () => {
  const [webGlSupported, setWebglSupported] = useState(true)
  return (
    <>
      <BrowserRouter>
        <div className="fixed top-0 left-0 w-full h-[100vh] -z-10">
          {webGlSupported ? (
            <FluidBackground
              onWebGLUnsupported={
                () =>
                  setWebglSupported(false)} />
            /*  {<Iridescence
              color={[0.3, 0.4, 0.7]} //#8099cc
              mouseReact={false}
              amplitude={0.1}
              speed={1.0}
              onWebGLUnsupported={() => setWebglSupported(false)}
            /> }*/
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
      </BrowserRouter>
    </>
  )
}

export default App

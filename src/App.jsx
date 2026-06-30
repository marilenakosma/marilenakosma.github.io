import { useState } from 'react'
import { BrowserRouter } from 'react-router'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Tech from './components/Tech'
import Iridescence from './components/backgrounds/Iridescence'
import Footer from './components/Footer'
const App = () => {
  const [webGlSupported, setWebglSupported] = useState(true)
  return (
    <>
      <BrowserRouter>
        <div className="fixed inset-0 min-h-[100dvh] w-full will-change-transform -z-10 bg-primary">
          {webGlSupported ? (
            <Iridescence
              color={[0.3, 0.4, 0.7]}
              mouseReact={false}
              amplitude={0.1}
              speed={1.0}
              onWebGLUnsupported={() => setWebglSupported(false)}
            />
          ) : (
            // CSS fallback 
            <div className="w-full h-full bg-linear-to-r/srgb from-indigo-500 to-teal-600" />
          )}
        </div>
        <div>
          <Navbar />
          <Hero />
        </div >
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

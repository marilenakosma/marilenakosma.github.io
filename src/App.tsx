import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Tech from './components/Tech'
import FluidBackground from './components/backgrounds/FluidBackground'
import Footer from './components/Footer'
import Loader from './components/ui/Loader'

const MIN_LOADER_MS = 300;

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [webGlSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const startTime: number = Date.now();

    const dismiss = () => {
      const elapsed: number = Date.now() - startTime;
      const remaining: number = Math.max(0, MIN_LOADER_MS - elapsed);
      setTimeout(() => setLoaded(true), remaining);
    };

    if (document.readyState === 'complete') {
      dismiss();
    } else {
      window.addEventListener('load', dismiss, { once: true });
      return () => window.removeEventListener('load', dismiss);
    }
  }, [])
  return (
    <>
      <div
        aria-hidden={loaded}
        className={`fixed inset-0 z-10 flex justify-content items-center bg-white
        ${loaded ? 'opacity-0' : 'opacity-100'}
        ${loaded ? 'pointer-events-none' : 'pointer-events-auto'}
        transition-opacity duration-400`}
      >
        <Loader />
      </div>

      <div className="fixed top-0 left-0 w-full h-[100vh] -z-10">
        {webGlSupported ? (
          <FluidBackground
            onWebGLUnsupported={() => setWebglSupported(false)} />
        ) : (
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

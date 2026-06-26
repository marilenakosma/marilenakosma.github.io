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


        <div className="w-full h-full bg-linear-to-r/srgb from-indigo-500 to-teal-600" />


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

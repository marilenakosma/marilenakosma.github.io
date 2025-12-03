import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Tech } from './components/Tech'
import { Projects } from './components/Projects'
import { StarsCanvas } from './components/StarsCanvas'
import { Contact } from './components/Contact'

const App = () =>  {

  return (
    <>
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover 
      bg-no-repeat bg-center">
       <Navbar/>
       <Hero/>
      </div>
      <About/>
      <Education/>
      <Tech/>
      <Projects/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>  
    </>
  )
}

export default App

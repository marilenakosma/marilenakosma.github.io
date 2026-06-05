import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router'
import { Routes,Route } from 'react-router'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Tech } from './components/Tech'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Skills } from './components/Skills'
import Grainient from './components/Grainient';
import Pattern from './components/Pattern';
import Iridescence from './components/Iridescence'
import Footer from './components/Footer'
const App = () =>  {

  return (
    <>
    <BrowserRouter>
      <div className="fixed inset-0 -z-3">
        {/*<Grainient color1="0080ff" //409fff //0080ff //409fff
           color2="#5227ff"
    color3="#B19EEF"
    timeSpeed={0.25}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={5}
    warpSpeed={4}
    warpAmplitude={50}
    blendAngle={0}
    blendSoftness={0.05}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={2}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={0.9}
    
  />*/}
       <Iridescence
           //color={[1, 1, 1]}
           color={[0.3,0.4,0.7]} //color={[0.4,0.3,0.7]}
           mouseReact={false}
           amplitude={0.1}
           speed={1.0}
       />
      
  </div>
<div>
  {/*<div className="bg-[rgba(0,0,0,0.1)]">*/}
       <Navbar/>
       <Hero/>
      </div>
      <section id="education">
        <Education/>
      </section>
      <Skills/>
      {/*<About/>*/}
      {/*<Tech/>*/}
      <section id="projects">
        <Projects/>
      </section>
      <div className="relative z-0">
       
       <section id="contact">
        <Contact/>
        </section>

        <Footer/>
        
      </div>
    </BrowserRouter>  
    </>
  )
}

export default App

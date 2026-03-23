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
import { Contact } from './components/Contact'
import Grainient from './components/Grainient';
const App = () =>  {

  return (
    <>
    <BrowserRouter>
      <div className="fixed inset-0 -z-3">
        <Grainient color1="0080ff" //409fff //0080ff //409fff
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
    
  />
  </div>
<div>
  {/*<div className="bg-[rgba(0,0,0,0.1)]">*/}
       <Navbar/>
       <Hero/>
       <Education/>
      </div>
      {/*<About/>*/}
      {/*<Tech/>*/}
      <Projects/>
      <div className="relative z-0">
       {/* <Contact/>*/}
        
      </div>
    </BrowserRouter>  
    </>
  )
}

export default App

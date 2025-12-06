import { createRoot } from 'react-dom/client'
import React,{Suspense,useEffect,useState} from 'react'
import {Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls,Preload,useGLTF } from '@react-three/drei'
import {useMediaQuery} from 'react-responsive'
import { Model } from '../Models/Room'
import { Lights } from '../Models/Lights'


//import CanvasLoader from '../Loader';

export const Room = () => {

  const isTablet = useMediaQuery({ query: '(max-width:1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  return (
  <Canvas 
    camera={{
      position: isMobile ? [4, 2, 6] : [6, 3, 8],
      fov: 50,
      near: 0.1,
      far: 1000
    }}
    shadows
    gl={{ 
      antialias: true,
      logarithmicDepthBuffer: true
    }}
    style={{ background: 'transparent' }}
  >
    <Lights/>
    
    <OrbitControls
      enablePan={false}
      enableZoom={true}
      enableRotate={true}
      maxDistance={12}
      minDistance={4}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 6}
      target={[0, 0, 0]}
      autoRotate={false}
      autoRotateSpeed={0.5}
    />
     
    <group
      scale={isMobile ? 1 : isTablet ? 1.2 : 1.8}
      position={[0, -1.5, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    >
      <Model />
    </group>
    <Preload all />
  </Canvas>
)
}

export default Room
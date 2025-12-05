import { createRoot } from 'react-dom/client'
import React,{Suspense,useEffect,useState} from 'react'
import {Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls,Preload,useGLTF } from '@react-three/drei'
import {useMediaQuery} from 'react-responsive'

//import CanvasLoader from '../Loader';

export const Room = () => {

  const isTablet = useMediaQuery({ query: '(max-width:1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });

  const computer = useGLTF('./desktop_pc/Gaming-Room.glb');
  return (
    <Canvas camera={{position:[0,0,15],fov:45}}>
      <ambientLight intensity={0.2} color="#1a1a40"/>
      <directionalLight position={[5,5,5]} intensity={5} />
      
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        maxPolarAngle={Math.PI / 5}
        minPolarAngle={Math.PI / 5}
      />

      <mesh>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color="blue"/>
      </mesh>
    </Canvas>
  )
}

export default Room
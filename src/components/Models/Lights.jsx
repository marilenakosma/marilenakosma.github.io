import React from 'react'

export const Lights = () => {
  return (
    <>

      <ambientLight intensity={0.5} />
      
      {/* Directional light for depth */}
      <directionalLight 
        position={[-5, 5, 5]}
        intensity={0.5}
      />
      
    </>
  )
}

export default Lights
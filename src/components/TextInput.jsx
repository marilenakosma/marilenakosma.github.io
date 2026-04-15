import React from 'react'

const TextInput = ({type,placeholder,custom}) => {
  let classes = "bg-white w-1/2 [box-shadow:0_4px_30px_rgba(0,0,0,0.5)] border border-black/50 rounded-lg mx-auto text-black p-2"
  return (
    custom ? 
    <input className={`${classes}`} type={type} placeholder={placeholder} /> 
    : <input className={classes} type={type} placeholder={placeholder} />
  )
}

export default TextInput
import { useId } from 'react'

const TextField = ({
  name,
  type = "text",
  as: Component = "input",
  required,
  placeholder,
  labelText,
  ...props
}) => {
  //let id = useId()
  let classes = "bg-white w-full mb-8 [box-shadow:0_4px_30px_rgba(0,0,0,0.5)] border border-black/50 rounded-lg mx-auto text-black p-3"
  return (
    <>
      <Component
        // id={useId}
        name={name}
        className={`${classes} mt-2`}
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </>
  )
}

export default TextField
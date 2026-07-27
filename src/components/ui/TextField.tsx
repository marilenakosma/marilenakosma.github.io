
type TextFieldProps = {
  name: string
  type?: string
  as?: 'input' | 'textarea'
  required?: boolean
  placeholder?: string
  labelText?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name' | 'type' | 'required' | 'placeholder'>

const TextField = ({
  name,
  type = "text",
  as: Component = "input",
  required,
  placeholder,
  labelText,
  ...props
}: TextFieldProps) => {
  const classes = "bg-white w-full mb-8 [box-shadow:0_4px_30px_rgba(0,0,0,0.5)] border border-black/50 rounded-lg mx-auto text-black p-3"
  return (
    <>
      <Component
        name={name}
        className={`${classes} mt-2`}
        type={type}
        placeholder={placeholder}
        required={required}
        {...(props as any)}
      />
    </>
  )
}

export default TextField

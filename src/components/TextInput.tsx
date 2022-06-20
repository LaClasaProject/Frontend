const TextInput = (props: JSX.IntrinsicElements['input']) => (
  <input
    {...props}
    className={
      `form-input ${props.className ?? ''}`
        .trim()
    }
  />
)

export default TextInput
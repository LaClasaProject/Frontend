const Button = (
  props: JSX.IntrinsicElements['button'] & { color?: string, fullWidth?: boolean },
) => (
  <button
    {...props}
    className={
      `btn ${props.color ? `btn-${props.color}` : ''} ${props.className ?? ''} ${props.fullWidth ? 'full-w' : ''}`
        .trim()
    }
  />
)

export default Button
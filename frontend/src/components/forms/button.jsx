function Button({ className, disabled, onClick, children }) {
  return (
    <button
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button

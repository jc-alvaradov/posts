function Input({ className, onChange, placeholder = '', disabled = false, type = 'text' }) {
  return (
    <input
      onChange={onChange}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      className={`bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
    />
  )
}

export default Input

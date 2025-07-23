import React from 'react'

const Button = ({ type = "button",onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
  >
    {children}
  </button>
)

export default Button
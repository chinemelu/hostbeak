import React from 'react'

const button = ({ children, className, type }) => {
  return (
    <button 
      className={ `${className} app-btn` }
      type={type}
    >
      {children}
    </button>
  )
}

export default button
import React from 'react'
import shortid from 'shortid'

import './Index.scss'

const BorderBottomInput = ({ 
  type, 
  value, 
  label, 
  name, 
  className, 
  handleChange, 
  inputContainerClass,
  placeholder
}) => {
  const uniqueId = shortid.generate()
  return (
    <div className={inputContainerClass}>
      <label htmlFor={`input-${uniqueId}`} className="border-bottom-input__label">{label}</label>
      <input 
        value={value}
        type={type || 'text'}
        name={name}
        placeholder={placeholder}
        className={`border-bottom-input ${className}`}
        onChange={ (e) => handleChange(e) }
        id={`input-${uniqueId}`}
      />
    </div>
  )
}

export default BorderBottomInput

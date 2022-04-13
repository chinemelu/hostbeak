import React from 'react'
import './Index.scss'

const CheckBox = ({ 
  label, 
  onChange, 
  value, 
  field, 
  inputContainerClass, 
  className 
}) => {
  return (
    <div className={`${inputContainerClass} checkbox-container flex items-center`}>
      <input 
        className={className} 
        type="checkbox" 
        id="inlineCheckbox1"        
        value={value}
        name={field}
        onChange={onChange}
      /> 
      <label className="checkbox__label">
        {label}
      </label>
    </div>
  )
  }

export default CheckBox;

import React from 'react'

const Input = ({name, id, type, value, changeEvent, label}) => {
  return (
    <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input
      onChange={changeEvent}
      id={id}
      name={name}
      type={type}
      value={value}
    />
  </div>
  )
}

export default Input
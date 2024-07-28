import React from 'react'

const Select = ({name, id, value, changeEvent, label, options}) => {
  return (
    <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <select
      onChange={changeEvent}
      id={id}
      name={name}
      value={value}
    >
        {
            options.map((optionVal, i) => {
                if (optionVal === "default") {
                    return <option value="" key={i} hidden>Select Category</option>
                }
              return <option value={optionVal} key={i}>{optionVal}</option>
            })
        }
    </select>
  </div>
  )
}

export default Select
import React from 'react';

const Select = ({ name, label, options, value}) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name}  value={value}  className="form-control">
          {options.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    )
}

 
  
  export default Select;
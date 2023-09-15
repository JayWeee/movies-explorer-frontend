import React from 'react';
import './Input.css';

function Input({
  label,
  name,
  value,
  errMessage,
  placeholder,
  handleChange,
  type,
}) {
  return (
    <div className='input'>
      <label className='input__label'>
        {label}
        <input
          className='input__field'
          type={type}
          value={value}
          name={name}
          id={`${name}-input`}
          placeholder={placeholder}
          onChange={handleChange}
          required
        />
      </label>
      <span className='input__error'>{errMessage}</span>
    </div>
  );
}

export default Input;
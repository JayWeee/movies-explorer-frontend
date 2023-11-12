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
  minLength,
  pattern,
  isLoading
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
          minLength={minLength}
          pattern={pattern && pattern}
          disabled={isLoading && 'disabled'}
          required
        />
      </label>
      <span className='input__error'>{errMessage[name]}</span>
    </div>
  );
}

export default Input;

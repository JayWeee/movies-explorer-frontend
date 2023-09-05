import React from 'react';
import './Input.css';

function Input({ label, name, value, errMessage }) {
  return (
    <div className='input'>
      <label className='input__label'>
        {label}
        <input
          className='input__field'
          type='text'
          value={value}
          name={name}
          id={`${name}-input`}
        />
      </label>
      <span className='input__error'>{errMessage}</span>
    </div>
  );
}

export default Input;
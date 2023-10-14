import React from 'react';
import './FormButton.css';

function FormButton({ textButton, errorMessage, isValid, disabledButton }) {
  return (
    <div>
      <span className='form__error'>{errorMessage}</span>
      <button
        className={`form__button ${
          (!isValid || disabledButton) && 'form__button_disabled'
        }`}
        type='submit'
        disabled={(!isValid || disabledButton) && 'disabled'}
      >
        {textButton}
      </button>
    </div>
  );
}

export default FormButton;

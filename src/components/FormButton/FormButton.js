import React from 'react';
import './FormButton.css';

function FormButton({
  textButton,
  errorMessage,
  isValid,
  disabledButton,
  isLoading,
}) {
  return (
    <div>
      <span className='form__error'>{errorMessage}</span>
      <button
        className={`form__button ${
          isLoading
            ? 'form__button_disabled'
            : (!isValid || disabledButton) && 'form__button_disabled'
        }`}
        type='submit'
        disabled={
          isLoading ? 'disabled' : (!isValid || disabledButton) && 'disabled'
        }
      >
        {textButton}
      </button>
    </div>
  );
}

export default FormButton;

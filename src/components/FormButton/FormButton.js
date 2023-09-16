import React from "react";
import "./FormButton.css";

function FormButton({ textButton, errorMessage, isValid }) {
  return (
    <div>
      <span className='form__error'>{errorMessage}</span>
      <button className={`form__button ${!isValid && 'form__button_disabled'}`} type='submit' disabled={!isValid && 'disabled'}>
        {textButton}
      </button>
    </div>
  );
}

export default FormButton;

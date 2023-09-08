import React from "react";
import "./FormButton.css";

function FormButton({ textButton, errorMessage }) {
  return (
    <div>
      <span className='form__error'>{errorMessage}</span>
      <button className='form__button' type='submit'>
        {textButton}
      </button>
    </div>
  );
}

export default FormButton;

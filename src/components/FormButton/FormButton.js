import React from "react";
import "./FormButton.css";

function FormButton({ textButton, errorMessage }) {
  return (
    <div>
      <span className='form__error'>{errorMessage}</span>
      <input className='form__button' type='submit' value={textButton} />
    </div>
  );
}

export default FormButton;

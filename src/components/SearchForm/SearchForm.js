import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function SearchForm() {

  const { values, handleChange, errors, resetForm, isValid } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
  }

  return (
    <form className='search-form' name='search-form' onSubmit={handleSubmit} noValidate>
      <div className='search-form__container'>
        <input
          className='search-form__input'
          type='text'
          name='search'
          id='search-input'
          placeholder='Фильм'
          value={values.search || ''}
          onChange={handleChange}
          required
        />
        <button
          disabled={!isValid && 'disabled'}
          className={
            `search-form__submit-btn ${!isValid && 'search-form__submit-btn_disabled'}`
          }
        />
      </div>
      <span className='search-form__input-error'>{errors.search}</span>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
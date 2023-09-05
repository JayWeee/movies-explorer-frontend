import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

  return (
    <form className='search-form' name='search-form'>
      <div className='search-form__container'>
        <input
          className='search-form__input'
          type='text'
          name='search'
          id='search-input'
          placeholder='Фильм'
        />
        <button className='search-form__submit-btn'></button>
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
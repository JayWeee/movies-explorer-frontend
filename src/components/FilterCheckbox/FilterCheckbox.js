import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onChange, shortMoviesChecker, isLoading }) {
  const pseudoItemClassName = `filter__pseudo-item ${
    shortMoviesChecker && 'filter__pseudo-item_active'
  }`;

  return (
    <label className={`filter ${isLoading && 'filter_disabled'}`}>
      <input
        className='filter__checkbox'
        type='checkbox'
        checked={shortMoviesChecker}
        onChange={onChange}
        disabled={isLoading && 'disabled'}
      />
      <span className={pseudoItemClassName}></span>
      <span className='filter__checkbox-text'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;

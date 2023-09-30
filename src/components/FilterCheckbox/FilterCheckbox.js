import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onChange, shortMoviesChecker }) {
  const pseudoItemClassName = `filter__pseudo-item ${
    shortMoviesChecker && 'filter__pseudo-item_active'
  }`;

  return (
    <label className='filter'>
      <input
        className='filter__checkbox'
        type='checkbox'
        checked={shortMoviesChecker}
        onChange={onChange}
      />
      <span className={pseudoItemClassName}></span>
      <span className='filter__checkbox-text'>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;

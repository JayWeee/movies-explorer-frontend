import { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function SearchForm({ getMovies }) {
  const { values, handleChange, isValid } = useFormWithValidation({});

  const [error, setError] = useState('');

  useEffect(() => {
    isValid && setError('');
  }, [isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    isValid ? getMovies() : setError('Нужно ввести ключевое слово');
  }

  return (
    <form
      className='search-form'
      name='search-form'
      onSubmit={handleSubmit}
      noValidate
    >
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
        <button className='search-form__submit-btn' />
      </div>
      <span className='search-form__input-error'>{error}</span>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;

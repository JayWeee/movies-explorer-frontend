import { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function SearchForm({
  handleSearchMovies,
  handleShortMoviesChange,
  shortMoviesChecker,
  searchRequest,
}) {
  const { values, handleChange, isValid, setValues } = useFormWithValidation(
    {}
  );

  const [error, setError] = useState('');

  useEffect(() => {
    searchRequest && setValues(searchRequest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isValid && setError('');
  }, [isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    isValid ? handleSearchMovies(values) : setError('Нужно ввести ключевое слово');
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
      <FilterCheckbox
        onChange={handleShortMoviesChange}
        shortMoviesChecker={shortMoviesChecker}
      />
    </form>
  );
}

export default SearchForm;

import React, { useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { filter } from '../../utils/utils';

function SavedMovies({ savedMovies, handleDeleteSavedMovie }) {
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [shortMoviesChecker, setShortMoviesChecker] = useState(false);

  function searchMovies(values) {
    setFilteredMoviesList(filter(savedMovies, values, shortMoviesChecker));
  }

  function handleShortMoviesChange() {
    setShortMoviesChecker(!shortMoviesChecker);
  }

  return (
    <section className='saved-movies' aria-label='Сохраненные фильмы'>
      <Header />
      <SearchForm
        handleSearchMovies={searchMovies}
        handleShortMoviesChange={handleShortMoviesChange}
        shortMoviesChecker={shortMoviesChecker}
      />
      <MoviesCardList
        moviesList={
          filteredMoviesList.length <= 0 ? savedMovies : filteredMoviesList
        }
        savedMovies={savedMovies}
        handleDeleteSavedMovie={handleDeleteSavedMovie}
      />
      <div className='saved-movies__devider' />
      <Footer />
    </section>
  );
}

export default SavedMovies;

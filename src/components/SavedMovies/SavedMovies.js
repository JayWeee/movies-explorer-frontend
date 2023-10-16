import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { filter } from '../../utils/utils';

function SavedMovies({ savedMovies, handleDeleteSavedMovie }) {
  const [shortMoviesChecker, setShortMoviesChecker] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  function searchMovies(values) {
    setMoviesList(filter(savedMovies, values, shortMoviesChecker));
  }

  function handleShortMoviesChange() {
    setShortMoviesChecker(!shortMoviesChecker);
  }

  console.log(moviesList)

  useEffect(() => {
    setMoviesList(savedMovies);
  }, [savedMovies]);

  return (
    <section className='saved-movies' aria-label='Сохраненные фильмы'>
      <Header />
      <SearchForm
        handleSearchMovies={searchMovies}
        handleShortMoviesChange={handleShortMoviesChange}
        shortMoviesChecker={shortMoviesChecker}
      />
      <MoviesCardList
        moviesList={moviesList}
        savedMovies={savedMovies}
        handleDeleteSavedMovie={handleDeleteSavedMovie}
      />
      <div className='saved-movies__devider' />
      <Footer />
    </section>
  );
}

export default SavedMovies;

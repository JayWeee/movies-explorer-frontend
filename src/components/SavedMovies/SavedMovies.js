import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList onSavedPage={true} />
    </>
  )
}

export default SavedMovies;
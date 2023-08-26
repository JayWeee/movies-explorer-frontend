import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
    </>
  );
}

export default Movies;
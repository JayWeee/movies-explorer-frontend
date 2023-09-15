import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({ loggedIn }) {
  return (
    <section className='saved-movies' aria-label='Сохраненные фильмы'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList onSavedPage={true} />
      <div className='saved-movies__devider' />
      <Footer />
    </section>
  )
}

export default SavedMovies;
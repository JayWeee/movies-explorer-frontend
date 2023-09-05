import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <Header />
      <SearchForm />
      <MoviesCardList onSavedPage={true} />
      <div className='saved-movies__devider' />
      <Footer />
    </section>
  )
}

export default SavedMovies;
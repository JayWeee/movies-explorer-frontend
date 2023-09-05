import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <section className='movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
      <Footer />
    </section>
  );
}

export default Movies;
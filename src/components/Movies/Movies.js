import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({ loggedIn }) {
  return (
    <section className='movies' aria-label='Фильмы'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
      <Footer />
    </section>
  );
}

export default Movies;
import { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import RequestMessage from '../RequestMessage/RequestMessage';
import * as MoviesApi from '../../utils/MoviesApi';

function Movies() {
  const [moviesList, setMoviesList] = useState([]); // Массив со всеми фильмами
  const [showMoviesList, setShowMoviesList] = useState([]); // Массив с отображаемыми фильмами
  const [numberOfMoviesShow, setNumberOfMoviesShow] = useState(0); // Кол-во показываемых фильмов
  const [showMoreMovies, setShowMoreMovies] = useState(0);
  const [moreButtonHidden, setMoreButtonHidden] = useState(true); // Показать/Скрыть кнопку еще
  const [isLoading, setIsLoading] = useState(false); // Стейт ожидания ответа от сервера
  const [error, setError] = useState(false); // Стейт ошибки при получении ошибки от сервера

  // const [shortMoviesChecker, setShortMoviesChecker] = useState(false);


  function checkWindowSize() {
      const { innerWidth } = window;
    if (innerWidth >= 1100) {
      setNumberOfMoviesShow(12);
      setShowMoreMovies(3);
    } else if (innerWidth > 690) {
      setNumberOfMoviesShow(8);
      setShowMoreMovies(2);
    } else {
      setNumberOfMoviesShow(5);
      setShowMoreMovies(2);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize)
    return () => {
      window.removeEventListener('resize', checkWindowSize)
    }
  }, [])

  function getMovies() {
    setIsLoading(true);
    setError(false);
    MoviesApi.getMovies()
      .then((moviesData) => {
        setMoviesList(moviesData);
        checkWindowSize();
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setShowMoviesList(moviesList.slice(0, numberOfMoviesShow));
  }, [numberOfMoviesShow, moviesList]);

  useEffect(() => {
    showMoviesList.length === moviesList.length
      ? setMoreButtonHidden(true)
      : setMoreButtonHidden(false);
  }, [moviesList.length, showMoviesList.length]);

  function showMore() {
    setNumberOfMoviesShow(numberOfMoviesShow + showMoreMovies);
  }

  return (
    <section className='movies' aria-label='Фильмы'>
      <Header />
      <SearchForm getMovies={getMovies} />
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <RequestMessage />
      ) : (
        <MoviesCardList moviesList={showMoviesList} />
      )}
      <MoreButton showMore={showMore} moreButtonHidden={moreButtonHidden} />
      <Footer />
    </section>
  );
}

export default Movies;

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
import { filter } from '../../utils/utils';

function Movies({ savedMovies, handleSaveButtonClick }) {
  const [moviesList, setMoviesList] = useState([]); // Массив со всеми фильмами
  const [showMoviesList, setShowMoviesList] = useState([]); // Массив с отображаемыми фильмами
  const [numberOfMoviesShow, setNumberOfMoviesShow] = useState(0); // Кол-во показываемых фильмов
  const [showMoreMovies, setShowMoreMovies] = useState(0); // сколько показывать фильмов при нажатии на кнопку еще
  const [moreButtonHidden, setMoreButtonHidden] = useState(true); // Показать/Скрыть кнопку еще
  const [isLoading, setIsLoading] = useState(false); // Стейт ожидания ответа от сервера
  const [error, setError] = useState(false); // Стейт ошибки при получении ошибки от сервера
  const [shortMoviesChecker, setShortMoviesChecker] = useState(false);
  const [notFoundErr, setNotFoundErr] = useState(false);

  const searchRequest = JSON.parse(localStorage.getItem('searchText'));

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

  function showMore() {
    setNumberOfMoviesShow(numberOfMoviesShow + showMoreMovies);
  }

  function handleShortMoviesChange() {
    setShortMoviesChecker(!shortMoviesChecker);
  }

  function populateStorage(values, moviesData, shortMoviesChecker) {
    localStorage.setItem('movies', JSON.stringify(moviesData));
    localStorage.setItem('searchText', JSON.stringify(values));
    localStorage.setItem('checkboxState', shortMoviesChecker);
  }

  function getMovies(values) {
    setIsLoading(true);
    setError(false);
    MoviesApi.getMovies()
      .then((moviesData) => {
        const filteredMovies = filter(moviesData, values, shortMoviesChecker);
        filteredMovies.length <= 0
          ? setNotFoundErr(true)
          : setNotFoundErr(false);
        setMoviesList(filteredMovies);
        populateStorage(values, filteredMovies, shortMoviesChecker);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  useEffect(() => {
    const moviesCheckbox = JSON.parse(localStorage.getItem('checkboxState'));
    const movies = JSON.parse(localStorage.getItem('movies'));
    checkWindowSize();
    movies && setMoviesList(movies);
    moviesCheckbox && setShortMoviesChecker(moviesCheckbox);
  }, []);

  useEffect(() => {
    setShowMoviesList(moviesList.slice(0, numberOfMoviesShow));
    showMoviesList.length === moviesList.length
      ? setMoreButtonHidden(true)
      : setMoreButtonHidden(false);
  }, [numberOfMoviesShow, moviesList, showMoviesList.length]);

  return (
    <section className='movies' aria-label='Фильмы'>
      <Header />
      <SearchForm
        handleSearchMovies={getMovies}
        handleShortMoviesChange={handleShortMoviesChange}
        shortMoviesChecker={shortMoviesChecker}
        searchRequest={searchRequest}
      />
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <RequestMessage />
      ) : notFoundErr ? (
        <p className='movies__not-found-error'>Ничего не найдено</p>
      ) : (
        <MoviesCardList
          moviesList={showMoviesList}
          savedMovies={savedMovies}
          handleSaveButtonClick={handleSaveButtonClick}
        />
      )}
      <MoreButton showMore={showMore} moreButtonHidden={moreButtonHidden} />
      <Footer />
    </section>
  );
}

export default Movies;

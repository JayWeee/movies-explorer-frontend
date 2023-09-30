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
  const [shortMoviesChecker, setShortMoviesChecker] = useState(false);
  
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
  }, [])

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
        setMoviesList(moviesData);
        populateStorage(values, moviesData, shortMoviesChecker);
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
    showMoviesList.length === moviesList.length
      ? setMoreButtonHidden(true)
      : setMoreButtonHidden(false);
  }, [numberOfMoviesShow, moviesList, showMoviesList.length]);

  function showMore() {
    setNumberOfMoviesShow(numberOfMoviesShow + showMoreMovies);
  }

  function handleShortMoviesChange() {
    setShortMoviesChecker(!shortMoviesChecker);
  }

  return (
    <section className='movies' aria-label='Фильмы'>
      <Header />
      <SearchForm
        getMovies={getMovies}
        handleShortMoviesChange={handleShortMoviesChange}
        shortMoviesChecker={shortMoviesChecker}
        searchRequest={searchRequest}
      />
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

import { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import RequestMessage from "../RequestMessage/RequestMessage";
import * as MoviesApi from "../../utils/MoviesApi";
import { filter } from "../../utils/utils";

function Movies({ savedMovies, handleSaveButtonClick }) {
  const [moviesList, setMoviesList] = useState([]); // Массив со всеми фильмами
  const [showMoviesList, setShowMoviesList] = useState([]); // Массив с отображаемыми фильмами
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [numberOfMoviesShow, setNumberOfMoviesShow] = useState(0); // Кол-во показываемых фильмов
  const [showMoreMovies, setShowMoreMovies] = useState(0); // сколько показывать фильмов при нажатии на кнопку еще
  const [moreButtonHidden, setMoreButtonHidden] = useState(true); // Показать/Скрыть кнопку еще
  const [isLoading, setIsLoading] = useState(false); // Стейт ожидания ответа от сервера
  const [error, setError] = useState(false); // Стейт ошибки при получении ошибки от сервера
  const [shortMoviesChecker, setShortMoviesChecker] = useState(false);
  const [notFoundErr, setNotFoundErr] = useState(false);

  const searchRequest = JSON.parse(localStorage.getItem("searchText"));
  const moviesCheckbox = JSON.parse(localStorage.getItem("checkboxState"));
  const movies = JSON.parse(localStorage.getItem("movies"));

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

  function getMovies(values) {
    setIsLoading(true);
    setError(false);
    MoviesApi.getMovies()
      .then((moviesData) => {
        setMoviesList(moviesData);
        setFilteredMovies(filter(moviesData, values, shortMoviesChecker));
        populateStorage(values);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleShortMoviesChange() {
    if (moviesList.length > 0) {
      setFilteredMovies(filter(moviesList, searchRequest, !shortMoviesChecker));
    } else {
      setMoviesList(filteredMovies);
      setFilteredMovies(
        filter(filteredMovies, searchRequest, !shortMoviesChecker)
      );
    }
    setShortMoviesChecker(!shortMoviesChecker);
  }

  function populateStorage(values) {
    localStorage.setItem("searchText", JSON.stringify(values));
  }

  useEffect(() => {
    filteredMovies.length > 0 &&
      localStorage.setItem("movies", JSON.stringify(filteredMovies));
    localStorage.setItem("checkboxState", shortMoviesChecker);
  }, [filteredMovies, shortMoviesChecker]);

  function showMore() {
    setNumberOfMoviesShow(numberOfMoviesShow + showMoreMovies);
  }

  useEffect(() => {
    moviesList.length > 0 && filteredMovies.length <= 0
      ? setNotFoundErr(true)
      : setNotFoundErr(false);
  }, [filteredMovies.length, moviesList.length]);

  useEffect(() => {
    setShowMoviesList(filteredMovies.slice(0, numberOfMoviesShow));
    showMoviesList.length === filteredMovies.length
      ? setMoreButtonHidden(true)
      : setMoreButtonHidden(false);
  }, [numberOfMoviesShow, filteredMovies, showMoviesList.length]);

  // Установка чекбокса и фильмов при загрузке страницы
  useEffect(() => {
    checkWindowSize();
    movies && setFilteredMovies(movies);
    moviesCheckbox && setShortMoviesChecker(moviesCheckbox);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

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

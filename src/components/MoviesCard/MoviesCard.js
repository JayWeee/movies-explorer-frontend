import React from 'react';
import './MoviesCard.css';
import { getTimeFromMins, imageLinkPrefix } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  movie,
  savedMovies,
  handleSaveButtonClick,
  handleDeleteSavedMovie,
}) {
  const { pathname } = useLocation();
  const onSavedPage = pathname === '/saved-movies';
  const isSaved = savedMovies.some((m) => m.movieId === movie.id);
  const cardBtnClassName = `card__btn ${isSaved && 'card__btn_active'}`;
  const cardBtnSavedClassName = `card__btn ${onSavedPage && 'card__btn_saved'}`;
  const cardBtnValue = isSaved ? '' : 'Сохранить';
  const cardImage = onSavedPage
    ? movie.image
    : imageLinkPrefix + movie.image.url;

  function handleClick() {
    handleSaveButtonClick(movie);
  }

  function handleDeleteMovie() {
    handleDeleteSavedMovie(movie);
  }

  return (
    <article className='card'>
      <img className='card__img' alt='Карточка' src={cardImage} />
      <div className='card__btn-container'>
        <button
          className={onSavedPage ? cardBtnSavedClassName : cardBtnClassName}
          type='button'
          onClick={onSavedPage ? handleDeleteMovie : handleClick}
        >
          {onSavedPage ? '' : cardBtnValue}
        </button>
      </div>
      <div className='card__description'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <p className='card__duration'>{getTimeFromMins(movie.duration)}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

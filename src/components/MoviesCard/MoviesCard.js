import { useState } from 'react';
import './MoviesCard.css';
import { getTimeFromMins } from '../../utils/utils';

function MoviesCard({ card, onSavedPage }) {
  const [saved, setSaved] = useState(false);
  const cardBtnClassName = `card__btn ${saved && 'card__btn_active'}`;
  const cardBtnSavedClassName = `card__btn ${onSavedPage && 'card__btn_saved'}`;
  const cardBtnValue = saved ? '' : 'Сохранить';
  const cardImage = `https://api.nomoreparties.co/${card.image.url}`;

  function handleChange() {
    setSaved(true);
  }

  return (
    <article className='card'>
      <img className='card__img' alt='Карточка' src={cardImage} />
      <div className='card__btn-container'>
        <button
          className={onSavedPage ? cardBtnSavedClassName : cardBtnClassName}
          type='button'
          onClick={handleChange}
        >
          {onSavedPage ? '' : cardBtnValue}
        </button>
      </div>
      <div className='card__description'>
        <h2 className='card__title'>{card.nameRU}</h2>
        <p className='card__duration'>{getTimeFromMins(card.duration)}</p>
      </div>
    </article>
  );
}

export default MoviesCard;

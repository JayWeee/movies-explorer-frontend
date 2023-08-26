import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ card, onSavedPage }) {

  const [saved, setSaved] = useState(false);
  const cardBtnClassName = `card__btn ${saved && 'card__btn_active'}`;
  const cardBtnSavedClassName = `card__btn ${onSavedPage && 'card__btn_saved'}`;
  const cardBtnValue = saved ? '' : 'Сохранить';

  function handleChange() {
    setSaved(true);
  }

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins/60);
	  const minutes = mins % 60;
	  return hours + 'ч ' + minutes + 'м';
  }

  return (
    <article className='card'>
      <img className='card__img' alt='Карточка' src={card.img} />
      <input className={onSavedPage ? cardBtnSavedClassName : cardBtnClassName} type='button' value={onSavedPage ? '' : cardBtnValue} onClick={handleChange} />
      <div className='card__description'>
        <p className='card__title'>{card.title}</p>
        <p className='card__duration'>{getTimeFromMins(card.duration)}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
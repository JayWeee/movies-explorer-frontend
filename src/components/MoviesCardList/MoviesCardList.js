import React from 'react';
import './MoviesCardList.css';
import { movies } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ onSavedPage }) {

  return (
    <div className='cards'>
      <div className='grid-container'>
        {
          movies.map((movie) => ((
            <MoviesCard
              key={movie.id}
              card={movie}
              onSavedPage={onSavedPage}
            />
          )))
        }
      </div>
    </div>
  );
}

export default MoviesCardList;
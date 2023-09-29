import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ onSavedPage, moviesList }) {
  return (
    moviesList.length > 0 && (
      <div className='cards'>
        <div className='grid-container'>
          {moviesList.map((movie) => (
            <MoviesCard key={movie.id} card={movie} onSavedPage={onSavedPage} />
          ))}
        </div>
      </div>
    )
  );
}

export default MoviesCardList;

import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  moviesList,
  savedMovies,
  handleSaveButtonClick,
  handleDeleteSavedMovie,
}) {
  return (
    moviesList.length > 0 && (
      <div className='cards'>
        <div className='grid-container'>
          {moviesList.map((movie) => (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              savedMovies={savedMovies}
              handleSaveButtonClick={handleSaveButtonClick}
              handleDeleteSavedMovie={handleDeleteSavedMovie}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default MoviesCardList;

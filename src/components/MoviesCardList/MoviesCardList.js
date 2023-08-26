import React from 'react';
import './MoviesCardList.css';
import { cards } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import Container from '../Container/Container';

function MoviesCardList({ onSavedPage }) {

  return (
    <section className='cards'>
      <Container>
        <div className='grid-container'>
          {
            cards.map((card) => ((
              <MoviesCard
                key={card.id}
                card={card}
                onSavedPage={onSavedPage}
              />
            )))
          }
        </div>
      </Container>
    </section>
  );
}

export default MoviesCardList;
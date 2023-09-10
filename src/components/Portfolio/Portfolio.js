import React from 'react';
import './Portfolio.css';
import Container from '../Container/Container';
import arrow from '../../images/link_arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <Container>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__links'>
          <li className="portfolio__item">
            <a className='portfolio__link' href='https://github.com/JayWeee/how-to-learn' target='_blank' rel='noreferrer'>
              Статичный сайт
              <img className='portfolio__link-arrow' src={arrow} alt='Стрелка' />
            </a>
          </li>
          <li className="portfolio__item">
            <a className='portfolio__link' href='https://github.com/JayWeee/russian-travel' target='_blank' rel='noreferrer'>
              Адаптивный сайт
              <img className='portfolio__link-arrow' src={arrow} alt='Стрелка' />
            </a>
          </li>
          <li className="portfolio__item">
            <a className='portfolio__link' href='https://github.com/JayWeee/react-mesto-api-full-gha' target='_blank' rel='noreferrer'>
              Одностраничное приложение
              <img className='portfolio__link-arrow' src={arrow} alt='Стрелка' />
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Portfolio;
import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import Container from '../Container/Container';

function Portfolio() {
  return (
    <section className='portfolio'>
      <Container>
        <h3 className='portfolio__title'>Портфолио</h3>
        <ul className='portfolio__links'>
          <li className="portfolio__item">
            <Link className='portfolio__link' to=''>
              Статичный сайт
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
               <path
                d="M2.60653 16.5241L0.944603 14.8622L13.3026 2.48295H3.7571L3.77841 0.181818H17.2656V13.6903H14.9432L14.9645 4.14489L2.60653 16.5241Z"
                fill="white"/>
              </svg>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link className='portfolio__link' to=''>
              Адаптивный сайт
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
               <path
                d="M2.60653 16.5241L0.944603 14.8622L13.3026 2.48295H3.7571L3.77841 0.181818H17.2656V13.6903H14.9432L14.9645 4.14489L2.60653 16.5241Z"
                fill="white"/>
              </svg>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link className='portfolio__link' to=''>
              Одностраничное приложение
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
               <path
                d="M2.60653 16.5241L0.944603 14.8622L13.3026 2.48295H3.7571L3.77841 0.181818H17.2656V13.6903H14.9432L14.9645 4.14489L2.60653 16.5241Z"
                fill="white"/>
              </svg>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Portfolio;
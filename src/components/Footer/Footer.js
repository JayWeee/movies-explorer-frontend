import React from 'react';
import './Footer.css';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__info'>
          <p className='footer__copyright'>&copy; 2023</p>
          <div className='footer__links'>
            <Link className='footer__link' to='https://practicum.yandex.ru'>Яндекс.Практикум</Link>
            <Link className='footer__link' to='https://github.com/JayWeee'>Github</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
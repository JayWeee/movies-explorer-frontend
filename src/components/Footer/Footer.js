import React from 'react';
import './Footer.css';
import Container from '../Container/Container';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__info'>
          <p className='footer__copyright'>&copy; 2023</p>
          <div className='footer__links'>
            <a href='https://practicum.yandex.ru' className='footer__link' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
            <a href='https://github.com/JayWeee' className='footer__link' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
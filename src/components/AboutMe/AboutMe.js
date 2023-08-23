import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../images/photo.png';
import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutMe() {
  return (
    <section className='about-me'>
      <Container>
        <SectionTitle title="Студент" />
        <div className='student'>
          <div className='student__info'>
            <h2 className='student__name'>Роман</h2>
            <p className='student__status'>Фронтенд-разработчик, 26 лет</p>
            <p className='student__description'></p>
            <Link className='student__social-link' to=''>Github</Link>
          </div>
          <img src={photo} className='student__photo' alt="Фото студента" />
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
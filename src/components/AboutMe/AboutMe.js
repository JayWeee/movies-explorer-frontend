import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.png';
import Container from '../Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutMe() {
  return (
    <section className='about-me' id='about'>
      <Container>
        <SectionTitle title="Студент" />
        <div className='student'>
          <div className='student__info'>
            <h2 className='student__name'>Роман</h2>
            <p className='student__status'>Фронтенд-разработчик, 26 лет</p>
            <p className='student__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href='https://github.com/JayWeee' className='student__social-link' target='_blank' rel='noreferrer'>Github</a>
          </div>
          <img src={photo} className='student__photo' alt="Фото студента" />
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../Container/Container';

function AboutProject() {
  return (
    <section className='project' id='project'>
      <Container>
      <SectionTitle title="О проекте" />
      <div className='project-info'>
        <div className='project-info__container'>
          <h3 className='project-info__title'>Дипломный проект включал 5 этапов</h3>
          <p className='project-info__caption'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='project-info__container'>
          <h3 className='project-info__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project-info__caption'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='timeline'>
        <div className='timeline__backend-container'>
          <p className='timeline__item timeline__item_colored'>1 неделя</p>
          <p className='timeline__caption'>Back-end</p>
        </div>
        <div className='timeline__frontend-container'>
          <p className='timeline__item'>4 недели</p>
          <p className='timeline__caption'>Front-end</p>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default AboutProject;
import React from 'react';
import './ProjectInfo.css';

function ProjectInfo() {
  return (
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
  );
}

export default ProjectInfo;
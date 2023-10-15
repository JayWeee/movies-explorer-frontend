import React from 'react';
import './TimeLine.css';

function TimeLine() {
  return (
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
  );
}

export default TimeLine;

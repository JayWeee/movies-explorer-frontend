import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className='not-found'>
      <h2 className='not-found__error'>404</h2>
      <p className='not-found__text'>Страница не найдена</p>
      <input className='not-found__button' type='button' value='Назад' onClick={goBack}/>
    </div>
  );
}

export default NotFoundPage;
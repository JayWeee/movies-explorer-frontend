import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';

function Navigation() {

  return (
    <nav className='navigation'>
      <div className='navigation__film-links'>
        <Link className='navigation__link' to=''>Фильмы</Link>
        <Link className='navigation__link' to=''>Сохранённые фильмы</Link>
      </div>
      <Link className='navigation__account-link' to=''>Аккаунт</Link>
    </nav>
  );
}

export default Navigation;
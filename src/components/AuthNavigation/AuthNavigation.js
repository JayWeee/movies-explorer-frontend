import React from 'react';
import { Link } from 'react-router-dom';
import './AuthNavigation.css';

function AuthNavigation() {
  return (
    <div className='auth-navigation'>
      <Link className='auth-navigation__register-link' to='/signup'>
        Регистрация
      </Link>
      <Link className='auth-navigation__signin-link' to='/signin'>
        Войти
      </Link>
    </div>
  );
}

export default AuthNavigation;

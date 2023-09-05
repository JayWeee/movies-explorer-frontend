import React from 'react';
import './SignForm.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import FormButton from '../FormButton/FormButton';

function SignForm({ name, title, children, textButton, pathname }) {
  return (
    <div className='sign-form'>
      <Logo />
      <form
      className='form'
      name={name}
      id={name}
      >
        <h2 className='form__title'>{title}</h2>
        <fieldset className='form__inputs'>
          {children}
        </fieldset>
        <FormButton textButton={textButton} errorMessage='Ошибка' />
        <p className='form__caption'>
          {pathname === '/signup' ? 'Уже зарегистрированы?' : pathname === '/signin' && 'Ещё не зарегистрированы?'}
          <Link to={pathname === '/signup' ? '/signin' : pathname === '/signin' && '/signup'} className='form__caption-link'>
          {pathname === '/signup' ? 'Войти' : pathname === '/signin' && 'Регистрация'}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignForm;
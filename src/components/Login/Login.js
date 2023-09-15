import React from 'react';
import './Login.css';
import SignForm from '../SignForm/SignForm';
import Input from '../Input/Input';
import { useForms } from '../../hooks/useForms';

function Login({ pathname, handleLogin }) {

  const { values, handleChange } = useForms();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }

  return (
    <section className='login'>
      <SignForm
        name='login'
        title='Рады видеть!'
        textButton='Войти'
        pathname={pathname}
        handleSubmit={handleSubmit}
      >
        <Input
          label='E-mail'
          name='email'
          errMessage='Что-то пошло не так...'
          placeholder='pochta@yandex.ru'
          handleChange={handleChange}
          value={values.email || ''}
          type='email'
        />
        <Input
          label='Пароль'
          name='password'
          errMessage='Что-то пошло не так...'
          placeholder='password'
          handleChange={handleChange}
          value={values.password || ''}
          type='password'
        />
      </SignForm>
    </section>
  );
}

export default Login;
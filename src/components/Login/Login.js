import React from 'react';
import './Login.css';
import SignForm from '../SignForm/SignForm';
import Input from '../Input/Input';

function Login({ pathname }) {
  return (
    <section className='login'>
      <SignForm
        name='login'
        title='Рады видеть!'
        textButton='Войти'
        pathname={pathname}
      >
        <Input
          label='E-mail'
          name='email'
          errMessage='Что-то пошло не так...'
          placeholder='pochta@yandex.ru'
        />
        <Input
          label='Пароль'
          name='password'
          errMessage='Что-то пошло не так...'
          placeholder='password'
        />
      </SignForm>
    </section>
  );
}

export default Login;
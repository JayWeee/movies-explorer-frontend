import React from 'react';
import './Register.css';
import SignForm from '../SignForm/SignForm';
import Input from '../Input/Input';

function Register({ pathname }) {
  return (
    <section className='register'>
      <SignForm
      name='register'
      title='Добро пожаловать!'
      textButton='Зарегистрироваться'
      pathname={pathname}
      >
        <Input
          label='Имя'
          name='name'
          errMessage='Что-то пошло не так...'
          placeholder='Виталий'
        />
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

export default Register;
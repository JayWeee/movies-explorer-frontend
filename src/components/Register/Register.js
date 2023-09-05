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
        />
        <Input
          label='E-mail'
          name='email'
          errMessage='Что-то пошло не так...'
        />
        <Input
          label='Пароль'
          name='password'
          errMessage='Что-то пошло не так...'
        />
      </SignForm>
    </section>
  );
}

export default Register;
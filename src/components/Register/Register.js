import React from 'react';
import './Register.css';
import SignForm from '../SignForm/SignForm';
import Input from '../Input/Input';
import { useForms } from '../../hooks/useForms';

function Register({ pathname, handleRegister }) {

  const { values, handleChange } = useForms({});

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values)
  }

  return (
    <section className='register'>
      <SignForm
      name='register'
      title='Добро пожаловать!'
      textButton='Зарегистрироваться'
      pathname={pathname}
      handleSubmit={handleSubmit}
      >
        <Input
          label='Имя'
          name='name'
          errMessage='Что-то пошло не так...'
          placeholder='Виталий'
          handleChange={handleChange}
          value={values.name || ''}
          type='text'
        />
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

export default Register;
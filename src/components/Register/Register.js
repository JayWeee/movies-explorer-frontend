import React from 'react';
import './Register.css';
import SignForm from '../SignForm/SignForm';
import Input from '../Input/Input';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Register({ pathname, handleRegister }) {

  const { values, handleChange, errors, resetForm, isValid } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
    resetForm();
  }

  return (
    <section className='register'>
      <SignForm
      name='register'
      title='Добро пожаловать!'
      textButton='Зарегистрироваться'
      pathname={pathname}
      handleSubmit={handleSubmit}
      isValid={isValid}
      >
        <Input
          label='Имя'
          name='name'
          errMessage={errors}
          placeholder='Виталий'
          handleChange={handleChange}
          value={values.name || ''}
          type='text'
          minLength='2'
        />
        <Input
          label='E-mail'
          name='email'
          errMessage={errors}
          placeholder='pochta@yandex.ru'
          handleChange={handleChange}
          value={values.email || ''}
          type='email'
        />
        <Input
          label='Пароль'
          name='password'
          errMessage={errors}
          placeholder='password'
          handleChange={handleChange}
          value={values.password || ''}
          type='password'
          minLength='8'
        />
      </SignForm>
    </section>
  );
}

export default Register;
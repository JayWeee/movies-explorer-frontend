import React from 'react';
import './Login.css';
import SignForm from '../SignForm/SignForm';
import Input from '../Input/Input';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login({ pathname, handleLogin, isLoading }) {
  const { values, handleChange, errors, resetForm, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values, resetForm);
  }

  return (
    <section className='login'>
      <SignForm
        name='login'
        title='Рады видеть!'
        textButton={isLoading ? 'Вход...' : 'Войти'}
        pathname={pathname}
        handleSubmit={handleSubmit}
        isValid={isValid}
        isLoading={isLoading}
      >
        <Input
          label='E-mail'
          name='email'
          placeholder='pochta@yandex.ru'
          handleChange={handleChange}
          value={values.email || ''}
          type='email'
          errMessage={errors}
          isLoading={isLoading}
          pattern='\S+@[a-z]+\.[a-z]{2,}'
        />
        <Input
          label='Пароль'
          name='password'
          placeholder='password'
          handleChange={handleChange}
          value={values.password || ''}
          type='password'
          errMessage={errors}
          minLength='8'
          isLoading={isLoading}
        />
      </SignForm>
    </section>
  );
}

export default Login;

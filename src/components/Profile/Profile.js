import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import FormButton from '../FormButton/FormButton';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ErrorContext } from '../../contexts/ErrorContext';

function Profile({ handleUpdateUser, handleSignOut, isLoading }) {
  const [isEdit, setIsEdit] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const disabled = isLoading ? 'disabled' : !isEdit && 'disabled';
  const { error } = useContext(ErrorContext);

  const { values, setValues, handleChange, errors, isValid } =
    useFormWithValidation({});
  const { name, email } = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({ name: name, email: email });
  }, [email, name, setValues]);

  useEffect(() => {
    values.name === name && values.email === email
      ? setDisabledButton(true)
      : setDisabledButton(false);
  }, [email, name, values.email, values.name]);

  function handleEdit() {
    setIsEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser(values, setIsEdit);
  }

  return (
    <section className='profile'>
      <Header />
      <form
        className='profile__form'
        name='profile'
        id='profile'
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className='profile__form-title'>Привет, {name}!</h2>
        <fieldset className='profile__inputs'>
          <div className='profile__input-container'>
            <label className='profile__input-label'>
              Имя
              <input
                className='profile__input-field'
                type='text'
                name='name'
                id='name-input'
                disabled={disabled}
                placeholder='Виталий'
                value={values.name || ''}
                onChange={handleChange}
                minLength='2'
                required
              />
            </label>
            <span className='profile__input-error'>{errors.name}</span>
          </div>
          <div className='profile__input-container'>
            <label className='profile__input-label'>
              E-mail
              <input
                className='profile__input-field'
                type='email'
                name='email'
                id='email-input'
                disabled={disabled}
                placeholder='pochta@yandex.ru'
                value={values.email || ''}
                onChange={handleChange}
                pattern='\S+@[a-z]+\.[a-z]{2,}'
                required
              />
            </label>
            <span className='profile__input-error'>{errors.email}</span>
          </div>
        </fieldset>
        {isEdit ? (
          <FormButton
            textButton={isLoading ? 'Сохранение...' : 'Сохранить'}
            isValid={isValid}
            disabledButton={disabledButton}
            isLoading={isLoading}
            errorMessage={error.message}
          />
        ) : (
          <div className='profile__buttons'>
            <button
              className='profile__btn-edit'
              type='button'
              onClick={handleEdit}
            >
              Редактировать
            </button>
            <button
              className='profile__btn-logout'
              type='button'
              onClick={handleSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
      </form>
    </section>
  );
}

export default Profile;

import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import FormButton from "../FormButton/FormButton";
import { useForms } from '../../hooks/useForms';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ handleUpdateUser, handleSignOut, loggedIn }) {
  const [isEdit, setIsEdit] = useState(false);
  const disabled = !isEdit && "disabled";

  const { values, setValues, handleChange } = useForms({});
  const { name, email } = useContext(CurrentUserContext);

  useEffect(() => {
    setValues({name: name, email: email});
  }, [email, name, setValues])

  function handleEdit() {
    setIsEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser(values);
    setIsEdit(false);
  }

  return (
    <section className='profile'>
      <Header loggedIn={loggedIn} />
        <form
          className='profile__form'
          name='profile'
          id='profile'
          onSubmit={handleSubmit}
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
                  required
                />
              </label>
              <span className='profile__input-error'>Ошибка</span>
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
                  required
                />
              </label>
              <span className='profile__input-error'>Ошибка</span>
            </div>
          </fieldset>
          {isEdit ? (
            <FormButton textButton='Сохранить' />
          ) : (
            <div className='profile__buttons'>
              <button className='profile__btn-edit' type='button' onClick={handleEdit}>
                Редактировать
              </button>
              <button className='profile__btn-logout' type='button' onClick={handleSignOut}>Выйти из аккаунта</button>
            </div>
          )}
        </form>
    </section>
  );
}

export default Profile;

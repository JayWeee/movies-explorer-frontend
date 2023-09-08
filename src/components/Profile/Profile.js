import { useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import FormButton from "../FormButton/FormButton";

function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const disabled = !isEdit && "disabled";

  function handleEdit() {
    setIsEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(false);
  }

  return (
    <section className='profile'>
      <Header />
        <form
          className='profile__form'
          name='profile'
          id='profile'
          onSubmit={handleSubmit}
        >
          <h2 className='profile__form-title'>Привет, Виталий!</h2>
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
                  type='text'
                  name='email'
                  id='email-input'
                  disabled={disabled}
                  placeholder='pochta@yandex.ru'
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
              <button className='profile__btn-edit' onClick={handleEdit}>
                Редактировать
              </button>
              <button className='profile__btn-logout'>Выйти из аккаунта</button>
            </div>
          )}
        </form>
    </section>
  );
}

export default Profile;

import React from 'react';
import './PopupWithConfirm.css';
import check from '../../images/check.svg';

function PopupWithConfirm({ isOpen }) {
  return (
    <div className={`popup ${isOpen && 'popup__opened'}`}>
      <div className='popup__container'>
        <img className='popup__check' src={check} alt='галочка' />
        <p className='popup__text'>Данные обновлены</p>
      </div>
    </div>
  );
}

export default PopupWithConfirm;

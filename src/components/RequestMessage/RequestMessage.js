import React from 'react';
import './RequestMessage.css';

function RequestMessage() {
  return (
    <div className='request-message'>
      <p className='request-message__text'>
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </p>
    </div>
  );
}

export default RequestMessage;

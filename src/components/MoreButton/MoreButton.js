import React from 'react';
import './MoreButton.css';

function MoreButton({ showMore, moreButtonHidden }) {
  return (
    <div className='more'>
      <input
        className={`more__btn ${moreButtonHidden && 'more__btn_hidden'}`}
        type='button'
        value='Ещё'
        onClick={showMore}
      />
    </div>
  );
}

export default MoreButton;

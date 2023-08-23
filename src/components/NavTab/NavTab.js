import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <div className='nav-tab'>
      <a className='nav-tab__link' href='#project'>О проекте</a>
      <a className='nav-tab__link' href='#techs'>Технологии</a>
      <a className='nav-tab__link' href='#about'>Студент</a>
    </div>
  );
}

export default NavTab;
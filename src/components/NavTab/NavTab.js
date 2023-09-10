import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <ul className='nav-tab'>
      <li className='nav-tab__item'><a className='nav-tab__link' href='#project'>О проекте</a></li>
      <li className='nav-tab__item'><a className='nav-tab__link' href='#techs'>Технологии</a></li>
      <li className='nav-tab__item'><a className='nav-tab__link' href='#about'>Студент</a></li>
    </ul>
  );
}

export default NavTab;
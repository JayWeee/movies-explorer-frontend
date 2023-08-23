import React from 'react';
import './NavTab.css';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <div className='nav-tab'>
      <Link className='nav-tab__link' to=''>О проекте</Link>
      <Link className='nav-tab__link' to=''>Технологии</Link>
      <Link className='nav-tab__link' to=''>Студент</Link>
    </div>
  );
}

export default NavTab;
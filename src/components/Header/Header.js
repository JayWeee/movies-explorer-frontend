import { useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

function Header() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className="header">
      <Link className='header__logo' to=''><img  src={logo} alt="Логотип сайта" /></Link>
      {loggedIn ? <Navigation /> : <AuthNavigation />}
    </header>
  );
}

export default Header;
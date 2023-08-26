import { useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Logo from '../Logo/Logo';

function Header() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <header className="header">
      <Logo />
      {loggedIn ? <Navigation /> : <AuthNavigation />}
    </header>
  );
}

export default Header;
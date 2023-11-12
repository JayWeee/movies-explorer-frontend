import { useContext, useState } from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Logo from '../Logo/Logo';
import { AppContext } from '../../contexts/AppContext';

function Header() {
  const loggedIn = useContext(AppContext);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  function handleClick() {
    setIsSidebarActive(true);
  }

  return (
    <header className='header'>
      <Logo />
      {loggedIn ? (
        <>
          <button
            className='header__sidebar-button'
            onClick={handleClick}
            value=''
          />
          <Navigation
            isSidebarActive={isSidebarActive}
            setIsSidebarActive={setIsSidebarActive}
          />
        </>
      ) : (
        <AuthNavigation />
      )}
    </header>
  );
}

export default Header;

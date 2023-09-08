import { useState } from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Logo from "../Logo/Logo";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  function handleClick() {
    setIsSidebarActive(true);
  }

  return (
    <header className='header'>
      <Logo />
      {loggedIn ? (
        <>
          <input className='header__sidebar-button' type='button' onClick={handleClick} />
          <Navigation isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive} />
        </>
      ) : (
        <AuthNavigation />
      )}
    </header>
  );
}

export default Header;

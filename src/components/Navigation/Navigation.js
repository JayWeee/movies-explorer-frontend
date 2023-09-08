import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isSidebarActive, setIsSidebarActive }) {

  function handleClick() {
    setIsSidebarActive(false)
  }

  return (
    <div className={`navigation ${!isSidebarActive && 'navigation_hidden'}`}>
      <div className='navigation__container'>
        <button
          className='navigation__button-close'
          onClick={handleClick}
          value=''
        />
        <nav className="navigation__links">
          <div className='navigation__links-container'>
            <NavLink
              to='/'
              className={({ isActive }) => 
                `navigation__link navigation__main-link ${isActive && 'navigation__link_active'}`
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `navigation__link ${isActive && 'navigation__link_active'}`
              }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `navigation__link ${isActive && 'navigation__link_active'}`
              }
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link className="navigation__account-link" to="/profile">
            Аккаунт
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;

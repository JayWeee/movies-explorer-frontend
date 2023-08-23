import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__film-links">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `${isActive ? "navigation__link_active" : "navigation__link"}`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={({ isActive }) =>
            `${isActive ? "navigation__link_active" : "navigation__link"}`
          }
        >
          Сохранённые фильмы
        </NavLink>
      </div>
      <Link className="navigation__account-link" to="/profile">
        Аккаунт
      </Link>
    </nav>
  );
}

export default Navigation;

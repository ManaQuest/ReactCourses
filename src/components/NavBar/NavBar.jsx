import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.clear();
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          библиотека современных знаний
        </a>
        <li>
            <a class="waves-effect waves-light btn" onClick={logout}>Logout</a>
          </li>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/users">Пользователи</Link>
          </li>
          <li>
            <Link to="/devices">Техника</Link>
          </li>
          <li>
            <Link to="/posts">Посты</Link>
          </li>

          <li>
            <Link to="/profile">Профиль</Link>
          </li>
          <li>
            <Link to="/learn_more">Материалы для ознакомления</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

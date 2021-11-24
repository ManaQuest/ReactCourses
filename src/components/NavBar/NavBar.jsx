import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";

const NavBar = ()=>{
  const {isAuth,setIsAuth}= useContext(AuthContext);
  const logout=()=>{
    setIsAuth(false);
    localStorage.clear();
  }
    return(
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Мой профиль</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/users">Sass</Link></li>
            <li><Link to="/devices">Components</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/profile">Профиль</Link></li>
            <li><Link to="/learn_more">Материалы для ознакомления</Link></li>
            <li><button onClick={logout}>logout</button></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;
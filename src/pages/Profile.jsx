import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Profile() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Создание странички",
      body: "22 ноября была создана эта страничка",
    },
    {
      id: 1,
      title: "Первое обновление странички",
      body: "24 ноября было первое обновление странички",
    },
  ]);
  return (
    <div className="container">
      <h1>Удалов Константин Владимирович</h1>
      <h4>Программировать может каждый!</h4>
      {news &&
        news.map((news) => (
          <div class="row container">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{news.title}</span>
                  <p>{news.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      <h6>
        Чтобы изучить свой первый язык программирования, советую посетить эти
        сайты:
      </h6>
      <h6>
        <a src="https://learn.javascript.ru">learn.javascript.ru</a>
      </h6>
      <h6>
        <a src="https://developer.mozilla.org">developer.mozilla.org</a>
      </h6>
      <h6>
        <a src="https://www.w3schools.com">w3schools.com</a>
      </h6>
    </div>
  );
}

export default Profile;

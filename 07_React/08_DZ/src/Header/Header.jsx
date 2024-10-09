import React from "react";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <div>
          <a href="/">
            <img src="./public/img/icon/logo.png" alt="logo" />
          </a>
          <a href="#">
            <img src="./public/img/icon/search.svg" alt="search" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="./public/img/icon/burger.svg" alt="burger" />
          </a>
          <a href="#">
            <img src="./public/img/icon/profile.svg" alt="profile" />
          </a>
          <a href="#">
            <img src="./public/img/icon/basket.svg" alt="basket" />
          </a>
        </div>
      </div>
    </header>
  );
};

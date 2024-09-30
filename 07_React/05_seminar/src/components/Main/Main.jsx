import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useTheme } from "../../contexts/ThemeContext";
import s from "./Main.module.css";
import lightImg from "./minion.jpg";
import darkImg from "./dart.jpg";

export const Main = () => {
  const { setUsername } = useContext(UserContext);
  const { theme } = useTheme();
  const { toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <button
        onClick={() => setUsername(prompt("Напишите своё имя ", "Василий"))}
      >
        Сменить имя
      </button>

      <button onClick={toggleTheme}>Сменить тему</button>
      <br />
      {theme === "light" ? (
        <img src={lightImg} alt="light" />
      ) : (
        <img src={darkImg} alt="dark" />
      )}
    </div>
  );
};

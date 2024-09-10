import { useState } from "react";
import { Content } from "../Content/Content";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button onClick={toggleTheme}>Переключатель темы</button>
      <Content theme={theme}/>
    </>
  );
};

import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const Main = () => {
  const { setUsername } = useContext(UserContext);

  return (
    <div>
      <button
        onClick={() => setUsername(prompt("Напишите своё имя ", "Василий"))}
      >
        Сменить имя
      </button>

    </div>
  );
};

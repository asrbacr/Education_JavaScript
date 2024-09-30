import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Header = () => {
  const { username, setUsername } = useContext(UserContext);

  return (
    <header style={{ display: "flex", gap: "20px" }}>
      <h2>Имя: {username}</h2>
      <button onClick={() => setUsername("гость")}>Выйти</button>
    </header>
  );
};

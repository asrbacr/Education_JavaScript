import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const Header = () => {
  const { username } = useContext(UserContext);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <h2>Имя: {username}</h2>
      <button onClick={() => setUsername("гость")}>Выйти</button>
    </div>
  );
};

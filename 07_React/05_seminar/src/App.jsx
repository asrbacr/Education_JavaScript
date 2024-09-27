import { useState } from "react";
import "./App.css";
import { UserContext } from "./contexts/UserContext/UserContext";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  const [username, setUsername] = useState("гость");

  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        <Header />
        <Main />
      </UserContext.Provider>
      <footer>
        <p>{new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;

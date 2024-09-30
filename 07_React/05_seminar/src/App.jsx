import { useState } from "react";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [username, setUsername] = useState("гость");

  return (
    <ThemeProvider>
      <UserContext.Provider value={{ username, setUsername }}>
        <Header />
        <Main />
      </UserContext.Provider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

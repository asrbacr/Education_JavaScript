import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting/Greeting.jsx";
import CurrentTime from "./components/CurrentTime";
import EventCard from "./components/EventCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <CurrentTime />
        <EventCard name="Кошки" date="05.09" location="г. Ярославль" />
      </header>
    </div>
  );
}

export default App;

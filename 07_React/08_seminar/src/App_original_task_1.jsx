import { useState } from "react";
import "./App.css";

function App() {
  const url = "https://api.chucknorris.io/jokes/random";

  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error({ message: response.message });
      }

      const data = await response.json();
      console.log(data);
      setJoke(data.value);
    } catch (error) {
      setJoke("Failed to fetch");
      console.log(error);
    } finally {
      if (loading) {
        return;
      }
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Jokes from Chuck Norris</h1>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? "Loading..." : "Get new joke"}
      </button>
      <p>{joke}</p>
    </>
  );
}

export default App;

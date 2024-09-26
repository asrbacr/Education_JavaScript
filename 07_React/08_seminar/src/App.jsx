import { useDispatch } from "react-redux";
import "./App.css";
import { fetchJoke } from "./store/jockSlice";

function App() {
  const url = "https://api.chucknorris.io/jokes/random";

  const { value, loading, error } = useSelector((state) => state.joke);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Jokes from Chuck Norris</h1>
      <button
        onClick={() => {
          dispatch(fetchJoke(url));
        }}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get new joke"}
      </button>
      <p>
        {error
          ? error.massage || "что-то пошло не так, попробуйте позже"
          : value}
      </p>
    </>
  );
}

export default App;

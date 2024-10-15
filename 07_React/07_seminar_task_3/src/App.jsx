import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchUsers } from "./redux/userReduser";
import { fetchUser } from "./redux/reduserUser";

function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  
  const handleUserClick = (userId) => {
    dispatch(fetchUser(userId));
  };

  return (
    <>
      <div className="App">
        <h1>Пользователи</h1>
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error}</p>}
        {users.length ? (
          <ul>
            {users.map((user) => (
              <div style={{ display: "flex", gap: "20px" }}>
                <li key={user.id}>{user.name}</li>
                <button onClick={handleUserClick(user.id)}>Подробнее</button>
              </div>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;

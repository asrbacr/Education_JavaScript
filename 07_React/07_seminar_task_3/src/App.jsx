import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchUsers } from "./redux/userReduser";
import { fetchUser } from "./redux/reduserUser";

function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const { user, loadingUser, errorUser } = useSelector((state) => state.user);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserClick = (userId) => {
    setUserId(userId);
    dispatch(fetchUser(userId));
  };

  return (
    <>
      <div className="App">
        <h1>Пользователи</h1>
        {loading && <p>Загрузка...</p>}
        {error && <p>Ошибка: {error}</p>}
        {users.length ? (
          <ul key={1}>
            {users.map((user) => (
              <div style={{ display: "flex", gap: "20px" }}>
                <li key={user.id}>{user.name}</li>
                <button onClick={() => handleUserClick(user.id)}>
                  Подробнее
                </button>
                {loadingUser && <p>Загрузка...</p>}
                {errorUser && <p>Ошибка: {errorUser}</p>}
                {userId === user.id ? (
                  <div>
                    <p>User: {user.username}</p>
                    <p>e-mail: {user.email}</p>
                  </div>
                ) : (
                  ""
                )}
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

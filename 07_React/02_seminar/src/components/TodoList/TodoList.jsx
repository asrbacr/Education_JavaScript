import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function addTodo() {
    if (value.trim() === "") {
      return;
    }
    setTodos([...todos, { value, id: crypto.randomUUID() }]);
    // setTodos([...todos, { value, id: Date.now() }]);
    setValue("");
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Добавить в список</button>
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>{todo.value}</li>
          </>
        ))}
      </ul>
    </>
  );
}

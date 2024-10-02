import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    
  // const todo = useSelector((state) => state.todo);
  const items = [];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <TodoItem {...item} />
        </li>
      ))}
      {/* {todo.items.map((item) => (
        <li key={item.id}>
          <TodoItem {...item} />
        </li>
      ))} */}
    </ul>
  );
};

export default TodoList;

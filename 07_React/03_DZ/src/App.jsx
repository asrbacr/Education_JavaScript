import { useState } from "react";
import "./App.css";
import { TemperatureConverter } from "./components/TemperatureConverter/TemperatureConverter";
import { TodoList } from "./components/TodoListFunc/TodoList";

function App() {
  return (
    <>
      <h2>Задание 1. Температурный конвертер с Material UI</h2>
      <TemperatureConverter />
      <h2>Задание 2: Список дел с Material UI</h2>
      <TodoList />
    </>
  );
}

export default App;

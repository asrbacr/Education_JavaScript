import { useState } from "react";
import "./App.css";
import { Box } from "./components/Box/Box";
import { List } from "./components/List/List";
import { AboutPage } from "./components/Page/AboutPage/AboutPage";
import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
import { HomePage } from "./components/Page/HomePage/HomePage";

const list = ["item1", "item 2", "item3", "item3", "item3", "item3"];
const listProducts = [
  { id: 1, title: "Samsung", price: "10000" },
  { id: 2, title: "Xiaomi", price: "20000" },
  { id: 3, title: "Poco", price: "30000" },
  { id: 4, title: "Lenovo", price: "40000" },
  { id: 5, title: "Moto", price: "50000" },
  { id: 6, title: "iPhone", price: "60000" },
];

function App() {
  const renderItem = (item, i) => {
    const style = {
      borderBottom: `3px solid ${i % 2 ? "green" : "yellow"}`,
      color: "black",
    };
    return (
      <li style={style} key={i}>
        {item}
      </li>
    );
  };

  return (
    <>
      <BrowserRouter>
        <nav className="nav">
          <NavLink className="nav__link" to="/">
            Главная
          </NavLink>
          <NavLink className="nav__link" to="/about">
            О нас
          </NavLink>
          <NavLink className="nav__link" to="/task-1">
            Задание 1
          </NavLink>
          <NavLink className="nav__link" to="/task-2">
            Лист. Задание 2
          </NavLink>
          <NavLink className="nav__link" to="/products">
            Страница товаров
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/task-1"
            element={
              <div>
                <h1>Пример использования компонента Box</h1>
                <Box>
                  <p>Текст внутри Box</p>
                </Box>
                <Box>
                  <img
                    src="https://i.7fon.org/150/c308518.jpg"
                    alt="Placeholder"
                  />
                </Box>
                <Box>
                  <div style={{ background: "lightblue", padding: "10px" }}>
                    <p>Другой компонент внутри Box</p>
                    <p>Текст внутри Box</p>
                  </div>
                </Box>
              </div>
            }
          />
          <Route
            path="/task-2"
            element={<List items={list} renderItem={renderItem} />}
          />
        </Routes>
  
        <ListPage />
        <DetailPage />

      </BrowserRouter>
    </>
  );
}

export default App;

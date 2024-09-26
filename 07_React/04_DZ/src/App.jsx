import s from "./App.module.css";
import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
import { CardLists, DetailPage } from "./components/CardProduct/CardProduct";
import data from "../data.json";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className={s.nav}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/product">Группы товаров</NavLink>
        </nav>
        <Routes>
          <Route path='/product' element={<CardLists items={data} />} />
          <Route path='/product/:id' element={<DetailPage items={data} />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;

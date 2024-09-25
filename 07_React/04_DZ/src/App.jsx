import s from "./App.module.css";
import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
import { WeightList } from "./components/CardProduct/CardProduct";
import data from "../data.json";

function App() {
  return (
    <>
      {/*       <BrowserRouter>
        <nav className={s.nav}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/product">Группы товаров</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </BrowserRouter> */}
      {console.log(data)}
      <WeightList items={data} />
    </>
  );
}

export default App;

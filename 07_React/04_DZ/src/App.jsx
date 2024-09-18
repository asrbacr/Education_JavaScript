import './App.css'
import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
import { ParseJson } from './components/ParseJson/ParseJson';
import url from '../data.json';


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Список товаров</NavLink>
        </nav>
        <ParseJson data={url}/>
      </BrowserRouter>
    </>
  )
}

export default App

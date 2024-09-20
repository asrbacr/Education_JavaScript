import './App.css'
import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
import { ParseJson } from './components/ParseJson/ParseJson';
import url from '../data.json';
import { ListPage } from './components/ListPage/ListPage';
import { DetailPage } from './components/DetailPage/DetailPage';


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Выбор товара:</NavLink>
        </nav>
        {/* <ParseJson data={url}/> */}
        <Routes>
          <Route path='/' element={<ListPage products={url} />} />
          <Route path='/:name_en/' element={<ListPage products={url} />} />
          <Route path='/salmon/:weight' element={<DetailPage products={url.option} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

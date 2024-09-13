import { useState } from "react";
import "./App.css";
import { Box } from "./components/Box/Box";
import { List } from "./components/List/List";

const list = ["item1", "item      2", "item3", "item3", "item3", "item3"];

function App() {
  const renderItem = (item, i) => {
    const style = {borderBottom: `3px solid ${i % 2 ? "green" : "yellow"}`, color: "black"}
    return (
      <li style={style} key={i}>
        {item}
      </li>
    );
  }

  return (
    <>
      {/* <div>
        <h1>Пример использования компонента Box</h1>
        <Box>
          <p>Текст внутри Box</p>
        </Box>
        <Box>
          <img src="https://i.7fon.org/150/c308518.jpg" alt="Placeholder" />
        </Box>
        <Box>
          <div style={{ background: "lightblue", padding: "10px" }}>
            <p>Другой компонент внутри Box</p>
            <p>Текст внутри Box</p>
          </div>
        </Box>
      </div> */}
      <List items={list} renderItem={renderItem}/>
    </>
  );
}

export default App;

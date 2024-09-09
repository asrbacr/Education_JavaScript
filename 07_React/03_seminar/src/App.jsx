import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Counter from "./components/Counter";
import data from "./data.json";
// import { MessagesList } from "./components/MessagesList/MessagesList";
import { TextDisplayForm } from "./components/TextDisplayForm/TextDisplayForm";

console.log(data);

function App() {
  return (
    <>
      <Greeting name="Василий" />
      <Counter />
      {/* <MessagesList messages={data}/> */}
      <TextDisplayForm />
    </>
  );
}

export default App;

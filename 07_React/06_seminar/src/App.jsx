import "./App.css";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";
import store from "./Redux/store";

function App() {
  return (
    <Provider>
      <Form />
      <TodoList />
    </Provider>
  );
}

export default App;

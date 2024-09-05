import "./App.scss";
import { Counter } from "./components/Counter";
import { TextInput } from './components/TextInput';
import { Timer } from "./components/Timer";
import { TodoList } from "./components/TodoList/TodoList";

const App = () => (
  <>
    <Counter />
    <br />
    <TextInput />
    <br />
    <TodoList />
    <br />
    <Timer />
  </>
);

export default App;

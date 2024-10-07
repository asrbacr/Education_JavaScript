import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../Button/Button";
import { addTodo } from "../../Redux/Slices/todoSlice";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handlerOnChange = ({ target }) => {
    setValue(target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  // const addItem = () => {};

  return (
    <form onSubmit={handlerSubmit}>
      <input onChange={handlerOnChange} value={value} />
      <Button>Добавить</Button>
    </form>
  );
};

export default Form;

import { useDispatch } from "react-redux";
import Button from "../Button/Button";

const TodoItem = ({ text, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    if (confirm("Вы уверены?")) {
      dispatch(deleteTodo(id));
    }
  };
  return (
    <div>
      <p>{text}</p>
      <Button handlerClick={deleteItem}>Удалить</Button>
    </div>
  );
};

export default TodoItem;

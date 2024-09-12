import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import style from "./TodoList.module.css";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";

export const TodoList = () => {
  const [listData, setListData] = useState([""]);
  const [todo, setTodo] = useState([
    { id: "1", text: "Задача 1" },
    { id: "2", text: "Задача 2" },
    { id: "3", text: "Задача 3" },
  ]);

  const addList = () => {
    setTodo([...todo, { text: listData, id: crypto.randomUUID() }]);
  };

  const delItem = (item) => {
    todo.filter((task) => {
      if (task.id !== item.target.id) {
        console.log(task.id);
        console.log(item.target.id);
      }
    });
  };

  const listTodos = () => {
    return todo.map((item) => {
      return (
        <ListItem disablePadding key={item.id}>
          <ListItemButton>
            <ListItemText primary={item.text} />
            <ListItemIcon id={item.id} onClick={delItem}>
              <HighlightOffIcon id={item.id} className={style.button__del} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      );
    });
  };
  return (
    <div>
      <div className={style.flex}>
        <Button variant="contained" onClick={addList}>
          <AddIcon fontSize="large" />
        </Button>
        <TextField
          variant="standard"
          fullWidth
          className={style.color}
          label="Введите задачу для добавления в список"
          placeholder="← кнопка добавить находится там"
          onChange={(e) => {
            setListData(e.target.value.trim());
          }}
        />
      </div>
      <ul>{listTodos()}</ul>
    </div>
  );
};

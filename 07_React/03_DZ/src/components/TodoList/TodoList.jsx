import {
  Button,
  IconButton,
  List,
  TextField,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  styled,
} from "@mui/material";
import * as React from "react";

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import style from "./TodoList.module.css";

const listData = ["Задача 1", "Задача 2", "Задача 3"];
function generate(element) {
  return [0, 1, 2, 9].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
export const TodoList = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [todo, setTodo] = useState([]);
  const addList = () => {
    listData.push(todo);
    console.log(listData);
  };

  const listTodos = () => {
    // console.log(todo);
    return listData.map((item, index) => {
      return (
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <HighlightOffIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item} secondary={index} />
          </ListItem>
        </List>
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
          onChange={(e) => setTodo(e.target.value.trim())}
        />
      </div>
      <Demo>
        <List dense={dense}>
          {generate(
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          )}
        </List>
      </Demo>
      {/* <ul>{listTodos()}</ul> */}
    </div>
  );
};

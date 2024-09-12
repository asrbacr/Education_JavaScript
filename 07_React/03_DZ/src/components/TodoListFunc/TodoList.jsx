import React, {useState} from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {Button, TextField, Card, CardContent, Typography, IconButton, CardHeader, CardActions} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import styles from './todolist.module.css'


const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: { margin: 8, width: 345},
            },
        },
    },
})


export const TodoList = () => {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    const handleChange = (e) => {
        setTask( e.target.value)
    }

    const addTask = (event) => {
        event.preventDefault()
        if(!task.trim()) return
        setTaskList([...taskList, {id: taskList.length, task: task}])
        setTask('')
    }

    const deleteTask = (e) => {
        setTaskList(taskList.filter(comment => comment.id !== Number(e.target.closest('li').id)))
    }

    return (
        <div>
            <div className={styles.form}>
                <TextField
                    label="Add task"
                    variant="standard"
                    onChange={handleChange}
                    value={task}
                />

                <Button
                    variant="outlined"
                    onClick={addTask}>Add</Button>
            </div>
            <ul>
                {taskList.map(task => (
                    <li className={styles.task} key={task.id} id={task.id}>
                        <ThemeProvider theme={theme}>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Task {task.id + 1}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {task.task}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="delete" onClick={deleteTask}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </ThemeProvider>
                    </li>
                ))}
            </ul>
        </div>
    )
}
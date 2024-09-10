import { Button, Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./TextDisplayForm.module.css";
import { useState } from "react";

export const TextDisplayForm = () => {
  const [saveData, setSaveData] = useState("");
  const [loadData, setLoadData] = useState("");

  const handleSubmit = (e) => {
    setSaveData(e.target.value);
  };
  
  const setData = () => {
    setLoadData(saveData);
  };

  return (
    <>
      <Box
        className={[style.wrapper, style.color]}
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onChange={handleSubmit}
      >
        <TextField fullWidth label="Введите текст" />
        <Button onClick={setData} variant="outlined">
          Отобразить текст
        </Button>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5">{loadData}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

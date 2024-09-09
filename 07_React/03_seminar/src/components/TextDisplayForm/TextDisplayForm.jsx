import { Button, Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextDisplayForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      text: data.get("text"),
    });
  };
  const textLabel = handleSubmit;

  return (
    <>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth label="Введите текст" />
        <Button onClick={handleSubmit} variant="outlined">
          Отобразить текст
        </Button>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5">{textLabel}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

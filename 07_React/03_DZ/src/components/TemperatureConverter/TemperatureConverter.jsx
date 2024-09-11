import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./TemperatureConverter.module.css";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

export const TemperatureConverter = () => {
  const [tempC, setTempC] = useState("");
  const [tempF, setTempF] = useState("");

  const convertTemp = () => {
    if (tempC !== "") {
      const f = (tempC * 9) / 5 + 32;
      setTempF(f.toFixed(2));
    }

    if (tempF !== "") {
      const c = ((tempF - 32) * 5) / 9;
      setTempC(c.toFixed(2));
    }
  };

  return (
    <div className={style.flex}>
      <TextField
        className={style.color}
        label="Температура в °С"
        variant="outlined"
        value={tempC}
        onChange={(e) => {
          setTempC(e.target.value);
          setTempF("");
        }}
      />
      <Button
        className={style.color}
        variant="outlined"
        onClick={convertTemp}
      >
        <CompareArrowsIcon fontSize="large" />
      </Button>
      <TextField
        className={style.color}
        label="Температура в °F"
        variant="outlined"
        value={tempF}
        onChange={(e) => {
          setTempF(e.target.value);
          setTempC("");
        }}
      />
    </div>
  );
};

import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [disableDecr, setDisableDecr] = useState(true);

  const handleUpClick = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handleDownClick = () => {
    if (counter <= 0) {
      return 0;
    }

    setCounter((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    if (counter >= 0) {
      setDisableDecr(false);
    } else {
      setDisableDecr(true);
    }
  }, [counter]);

  return (
    <div className="wrapper">
      <Button
        onClick={handleUpClick}
        variant="contained"
        className="color_up color_text"
      >
        + 1
      </Button>
      <p>{counter}</p>
      <Button
        onClick={handleDownClick}
        variant="outlined"
        className="color_down color_text"
      >
        - 1
      </Button>
    </div>
  );
};

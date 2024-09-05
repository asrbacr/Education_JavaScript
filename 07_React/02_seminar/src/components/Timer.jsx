import { useEffect, useState } from "react";

export function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const time = setInterval(
      (() => {
        setTime((prevTime) => prevTime + 1);
      },
      1000)
    );

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div>
      <p>Таймер: {time}</p>
    </div>
  );
}

/* import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    // что должно выполнится

    return () => {
      clearInterval(timer);
      // в момент времени какой-то (он может отсутствовать)
    };
  }, []); // внутри массива значение пропса которое заставит выполнится функцию только в моменнт обновления пропса (но тут у нас пусто)
  // это значит что функция будет работать и в момент монтирования и в моент обновления

  return (
    <div>
      <p>Время: {time}</p>
    </div>
  );
}

export default Timer; */
import { useState } from "react";

/* function Child(props) {
  return <span>{props.number}</span>;
}
function Button(props) {
  return <button onClick={props.onClick}>Click +1</button>;
}
export function Counter() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <Child number={count} />
      <Button onClick={changeCount} />
    </div>
  );
} */

export function Counter() {
  const [numb, setNumb] = useState(0);

  const handlerButtonClick = () => {
    setNumb(numb + 1);
  };

  return <button onClick={handlerButtonClick}>{numb}</button>;
}

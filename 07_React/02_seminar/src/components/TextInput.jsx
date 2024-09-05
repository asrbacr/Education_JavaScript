import { useState } from "react";

export function TextInput() {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </>
  );
}

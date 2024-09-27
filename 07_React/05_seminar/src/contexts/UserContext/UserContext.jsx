import { createContext } from "react";

// для чисел лучше использовать в качестве начального значения Nan

export const UserContext = createContext({
  username: "",
  setUsername: () => {},
});

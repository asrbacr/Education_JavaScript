import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userReduser";
import userReducer from "./reduserUser";
import { loggerMiddleware } from "../middleware/loggerMiddleware";

const store = configureStore({
  reducer: { users: usersReducer, user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;

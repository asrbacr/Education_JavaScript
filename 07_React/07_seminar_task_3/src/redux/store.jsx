import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userReduser";
import { loggerMiddleware } from "../middleware/loggerMiddleware";

const store = configureStore({
  reducer: { users: usersReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( loggerMiddleware),
});

export default store;

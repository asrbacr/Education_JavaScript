import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersSaga from "../sagas/usersSaga";
import usersReducer from "./userReduser";
import { loggerMiddleware } from "../middleware/loggerMiddleware";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { users: usersReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, loggerMiddleware),
});

// then run the saga
sagaMiddleware.run(usersSaga);

export default store;

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersSaga from "../sagas/usersSaga";
import usersReducer from "./userReduser";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { users: usersReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(usersSaga);

export default store;

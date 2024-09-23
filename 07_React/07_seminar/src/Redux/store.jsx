import { createSagaMiddleware } from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/todoSlice";
import { loggerMiddleware } from "../middleware/loggerMiddleware";
import usersSaga from "../sagas/userSaga";
import userSlice from "./userReduser";

/* const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   loggerMiddleware,
  // ],
}); */

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, loggerMiddleware),
});

// then run the saga
sagaMiddleware.run(usersSaga);

export default store;

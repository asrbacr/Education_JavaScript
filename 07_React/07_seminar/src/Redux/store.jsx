import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/todoSlice";
import favoriteReducer from "./Slices/favoritesSlice";
import productReducer from "./Slices/productSlice";
import { loggerMiddleware } from "../middleware/loggerMiddleware";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    favorite: favoriteReducer,
    products: productReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export default store;

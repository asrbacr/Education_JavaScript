import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/todoSlice";
import favoriteReducer from "./Slices/favoritesSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    favorite: favoriteReducer,
  },
});

export default store;

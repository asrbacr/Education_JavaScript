import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/todoSlice";
import favoriteReducer from "./Slices/favoritesSlice";
import productReducer from "./Slices/productSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    favorite: favoriteReducer,
    products: productReducer,
  },
});

export default store;

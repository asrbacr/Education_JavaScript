import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "./jockSlice";

export const store = configureStore({
    reducer: {
        joke: jokeReducer,
    },
})
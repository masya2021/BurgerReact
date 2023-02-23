import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice.js";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

// reducer - функции которые из нашего хранилища считывать текущее состояие приложения и возвращать новое состояние

import { configureStore } from "@reduxjs/toolkit";
import toDoReducer, { persistToLocalStorage } from "../redux/toDoSlice";

export const store = configureStore({
  reducer: { todo: toDoReducer },
});

store.subscribe(() => {
  const state = store.getState().todo;
  persistToLocalStorage(state);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

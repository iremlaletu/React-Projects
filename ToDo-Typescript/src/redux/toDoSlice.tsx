import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDoInitialState, ToDoType } from "../types/Types";
import { loadFromLocalStorage } from "../Hooks/LocalStorage";

const initialState: ToDoInitialState = loadFromLocalStorage();

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (
      state: ToDoInitialState,
      action: PayloadAction<Omit<ToDoType, "completed">>
      // dışardan gelen (idsi ve conenti olan)type'ı ToDoType tipinden gelecek
    ) => {
      state.todos = [...state.todos, { ...action.payload, completed: false }];
    },
    //idsine göre silme işlemi yapıyoruz benim id number tipinde
    removeToDo: (state: ToDoInitialState, action: PayloadAction<number>) => {
      state.todos = [
        ...state.todos.filter((todo: ToDoType) => todo.id !== action.payload),
      ];
    },
    updateToDo: (state: ToDoInitialState, action: PayloadAction<ToDoType>) => {
      state.todos = [
        ...state.todos.map((todo: ToDoType) =>
          todo.id !== action.payload.id ? todo : action.payload
        ),
      ];
    },
    toggleComplete: (
      state: ToDoInitialState,
      action: PayloadAction<{ id: number }>
    ) => {
      state.todos = state.todos.map((todo: ToDoType) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    filterTodos: (
      state: ToDoInitialState,
      action: PayloadAction<"All" | "Pending" | "Completed">
    ) => {
      state.filter = action.payload;
    },
  },
});
export const persistToLocalStorage = (state: ToDoInitialState) => {
  localStorage.setItem("todos", JSON.stringify(state));
};

export const { addToDo, removeToDo, updateToDo, toggleComplete, filterTodos } =
  toDoSlice.actions;
export default toDoSlice.reducer;

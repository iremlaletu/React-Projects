import { ToDoInitialState } from "../types/Types";

export const loadFromLocalStorage = (): ToDoInitialState => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    try {
      const parsedTodos = JSON.parse(savedTodos);
      if (parsedTodos.todos && parsedTodos.filter) {
        return parsedTodos;
      }
    } catch (error) {
      console.error("Error parsing localStorage data", error);
    }
  }
  return { todos: [], filter: "All" };
};

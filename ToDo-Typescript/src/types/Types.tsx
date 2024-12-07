export interface ToDoInitialState {
  todos: ToDoType[];
  filter: "All" | "Pending" | "Completed";
}
export interface ToDoType {
  id: number;
  content: string;
  completed: boolean;
}

import { useSelector } from "react-redux";
import ToDo from "./ToDo";
import { RootState } from "../redux/store";
import { ToDoType } from "../types/Types";

const ToDoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const filter = useSelector((state: RootState) => state.todo.filter);
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Pending") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true; // Varsayılan olarak tüm görevler
  });
  return (
    <div className="space-y-4">
      {filteredTodos &&
        filteredTodos.map((todo: ToDoType) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default ToDoList;

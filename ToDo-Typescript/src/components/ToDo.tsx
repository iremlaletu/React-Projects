import { FaPencilAlt, FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ToDoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeToDo, toggleComplete, updateToDo } from "../redux/toDoSlice";
import { useState } from "react";

const ToDo = ({ todo }: { todo: ToDoType }) => {
  const { id, content, completed } = todo;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updateText, setUpdateText] = useState<string>(todo.content);
  const dispatch = useDispatch();

  const updateHandle = () => {
    const payload: ToDoType = {
      id: id,
      content: updateText,
      completed: completed,
    };
    dispatch(updateToDo(payload));
    setIsEditing(false);
  };
  const toggleCompleteHandle = () => {
    dispatch(toggleComplete({ id }));
  };

  return (
    <div className=" flex flex-row items-center justify-between bg-neutral-100 shadow-md rounded-md px-8 py-10">
      {isEditing ? (
        <div className="flex-grow flex items-center space-x-3">
          <input
            className="flex-grow border-b focus:outline-none px-2 py-1 bg-transparent"
            type="text"
            value={updateText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUpdateText(e.target.value)
            }
          />
          <button
            className="p-2 ml-2 rounded-lg hover:bg-green-400 transition-colors"
            onClick={updateHandle}
          >
            <FaRegCheckCircle className="text-2xl" />
          </button>
          <button
            className="p-2 ml-2 rounded-lg hover:bg-gray-400 transition-colors"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center space-x-3 p-2">
            <input
              type="checkbox"
              checked={completed}
              onChange={toggleCompleteHandle}
              className="appearance-none flex-shrink-0 w-5 h-5 border border-gray-400 rounded-md checked:bg-green-400 checked:border-transparent cursor-pointer checked:after:content-['x'] checked:after:text-white flex items-center justify-center"
            />
            <div className={`flex-grow ${completed ? " text-gray-500" : ""}`}>
              {content}
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-2">
              <button
                className="border p-2 rounded-lg hover:bg-yellow-400"
                onClick={() => setIsEditing(true)}
              >
                <FaPencilAlt className="text-2xl" />
              </button>
              <button
                onClick={() => dispatch(removeToDo(id))}
                className="border p-2 rounded-lg hover:bg-red-700"
              >
                <MdDeleteForever className="text-2xl text-gray-700 hover:text-white" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ToDo;

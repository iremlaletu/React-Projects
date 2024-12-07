import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/toDoSlice";

const ToDoCreate = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const handleCreateToDo = () => {
    if (input.trim().length == 0) {
      alert("invalid to do");
      return;
    }
    const payload = {
      id: Math.floor(Math.random() * 99999999),
      content: input,
    };
    dispatch(addToDo(payload));
    setInput("");
  };

  return (
    <>
      <h1 className="text-xl mb-5 text-orange-950"> Create Your To Do's...</h1>
      <div className="flex mb-4 gap-7 w-full max-w-4xl">
        <input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          placeholder="Enter a to-do.."
          className="flex-1 py-2 px-3 border-b border-gray-400 focus:outline-none bg-transparent"
        />

        <button
          onClick={handleCreateToDo}
          className="relative w-36 h-11 cursor-pointer rounded-md flex items-center border border-green-400 bg-green-400 group hover:bg-green-400 active:bg-green-400 active:border-green-400"
        >
          <span className="text-gray-600 font-semibold ml-2 md:ml-6 transform transition-all duration-300 group-hover:hidden">
            Add Item
          </span>

          <span className="absolute right-0 h-full w-10 rounded-lg bg-green-400 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
            <svg
              className="svg w-8 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default ToDoCreate;

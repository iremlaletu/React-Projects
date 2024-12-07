import { useDispatch, useSelector } from "react-redux";
import { filterTodos } from "../redux/toDoSlice";
import { FaCheckCircle, FaList, FaTasks } from "react-icons/fa";
import { RootState } from "../redux/store";

const Tabs = () => {
  const tabs = [
    { name: "All", icon: <FaList /> },
    { name: "Pending", icon: <FaTasks /> },
    { name: "Completed", icon: <FaCheckCircle /> },
  ];

  const selectedTab = useSelector((state: RootState) => state.todo.filter);
  const dispatch = useDispatch();

  return (
    <ul className="flex justify-start gap-3 md:gap-11 mb-5">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={`flex items-center justify-center w-40 h-10 border cursor-pointer px-2 py-2.5 rounded-md border-zinc-300 transition-colors 
          ${
            selectedTab === tab.name
              ? "bg-green-100 text-green-700 border-green-400"
              : "hover:bg-zinc-100 hover:text-green-400"
          }`}
          onClick={() =>
            dispatch(filterTodos(tab.name as "All" | "Pending" | "Completed"))
          }
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.name}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;

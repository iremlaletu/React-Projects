import Tabs from "./components/Tabs";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="flex flex-col justify-start items-center md:mt-20 gap-3">
      <div className="bg-neutral-100 shadow-md rounded-md p-6 w-full max-w-4xl">
        <ToDoCreate />
      </div>
      <div className="w-full max-w-4xl">
        <Tabs />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;

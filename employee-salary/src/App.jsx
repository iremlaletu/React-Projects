import { useState, useEffect } from "react";
import AddWorker from "./components/Worker/AddWorker";
import WorkerList from "./components/Worker/WorkerList";

export default function App() {
  const [workers, setWorkers] = useState(
    localStorage.getItem("workers")
      ? JSON.parse(localStorage.getItem("workers"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));
  }, [workers]);

  return (
    <>
      <h1 className="text-center mt-6 text-3xl">Employee - Salary Info</h1>
      <AddWorker workers={workers} setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </>
  );
}

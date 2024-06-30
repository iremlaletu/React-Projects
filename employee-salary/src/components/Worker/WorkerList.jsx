import Card from "../UI/Card";

const WorkerList = ({ workers, setWorkers }) => {
  if (workers.length < 1) {
    return;
  }
  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };
  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <strong>Name</strong>
          <strong>Salary</strong>
        </li>
        {workers.map((worker) => (
          <li
            key={worker.id}
            onClick={() => {
              deleteWorker(worker.id);
            }}
            className="flex justify-between cursor-pointer hover:text-red-600 p-2 hover:shadow-xl hover:line-through transition-shadow "
          >
            <span> {worker.name} </span>
            <span> {worker.wage} $</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
